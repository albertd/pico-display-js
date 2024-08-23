import colors from '../../src/constants/colors.js';

const determineColorTemperature = (temperature) => {
    let color = 'blue';
    
    if (temperature > 40) {
        color = 'blue';
    } else if (temperature > 60) {
        color = 'red';
    }

    return colors[ color ];
}

const determineColorFrequency = (frequencyInKhz) => {
    let color = 'blue';
    
    if (frequencyInKhz > 10) {
        color = 'red';
    } else if (frequencyInKhz > 24) {
        color = 'yellow';
    } else if (frequencyInKhz > 60) {
        color = 'white';
    }

    return colors[ color ];
}

export const DeviceStatus = (props = {}) => {
    let { x = 0, y = 0, fontColor = 'white', fontScale = [2,2], coreTemperature = '0', voltage = '0', amperage = '0', wattage = '0', frequency = '0' } = props;
    const xOffset = 250;
    return {
        x,
        y,
        fontColor,
        fontScale,
        render: (ctx) => {
            if (!ctx) {
                throw new Error("Context not set! Please set it before using .render()");
            }

            ctx.setFontScale(3, 3);
            ctx.setFontColor( colors['white'] );

            ctx.drawText(x, y, 'Temperature: ');
            ctx.setFontColor( determineColorTemperature(coreTemperature) );
            ctx.drawText(x + xOffset, y, coreTemperature + ' C');

            ctx.setFontColor( colors['white'] );
            ctx.drawText(x, y + 50, 'Power: ');
            ctx.drawText(x + xOffset, y + 50, `${voltage}V & ${amperage}A` );
            ctx.drawText(x, y + 100, 'Wattage: ');
            ctx.drawText(x + xOffset, y + 100, wattage + 'W');

            ctx.drawText(x, y + 150, 'Frequency: ');
            ctx.setFontColor( determineColorFrequency(frequency) );
            ctx.drawText(x + xOffset, y + 150, (frequency / 1000) + ' kHz');
        }
    }
}
