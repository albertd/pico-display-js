const { EventEmitter } = require('events');

// Set interrupt on the GPIO 0
const { GPIO } = require('gpio');


// const { SPI } = require('spi');

class XP2046 extends EventEmitter {
    setup(spi, options) {
        this.spi = spi;
        options = Object.assign(
            {
                cs: -1,
                irq: -1
            },
            options
        );
        this.cs = options.cs;
        this.irq = options.irq;
        if (this.cs > -1) {
            pinMode(this.cs, OUTPUT);
            digitalWrite(this.cs, HIGH);
        }
        if (this.irq > -1) {
            const pin0 = new GPIO(this.irq, INPUT);
            pin0.irq(this.touch.bind(this), CHANGE);
        }
    }

    touch() {

        console.log('touched');
        const maxReads = 5;
        let x = 0;
        let y = 0;
        digitalWrite(this.cs, LOW);
        delayMicroseconds(200);

        for (let i = 0; i < maxReads; i++) {
            this.spi.send(new Uint8Array([0xD1]));
            delayMicroseconds(200);
            let xData = this.spi.recv(2);
            if (xData && xData.length == 2)
                x = x + (((xData[0] << 8) + xData[1]) >> 3)
            this.spi.send(new Uint8Array([0x91]));
            delayMicroseconds(200);
            let yData = this.spi.recv(2);
            if (yData && yData.length == 2)
                y = y + (((yData[0] << 8) + yData[1]) >> 3)
        }
        this.spi.send(new Uint8Array([0x0]));
        digitalWrite(this.cs, HIGH);
        x = x / maxReads;
        y = y / maxReads;

        console.log(x, y)
        if (x > 0 && y < 4000)
            this.emit('touch', [x, y]);
    }
}

module.exports = {
    XP2046
}
