const { SPI } = require('spi');
const graphics = require("graphics");

import colors from "../src/constants/colors.js";
import renderer from "../src/renderer/index.js";
import router from "../src/router/index.js";
import { init as touchInit, onTouch } from '../src/touch/index.js';
import display from '../src/display/index.js';

export const init = (config) => {
    if (!config) throw new Error('No config provided');
    if (!config.Routes) throw new Error('No Routes provided in config');
    if (!config.defaultRoute) throw new Error('No defaultRoute provided in config');

    console.log('init');

    console.log('Init display');
    pinMode(20, OUTPUT);
    digitalWrite(20, HIGH);

    // set controls
    display.setOn = (() => {
        digitalWrite(20, HIGH);
    });
    display.setOff = (() => {
        digitalWrite(20, LOW);
    });

    // init graphics stack
    console.log('Init graphics');


    console.log('initialise spi graphics');
    const spiGraphicsOptions = {
        // SPI options
        mode: SPI.MODE_0,
        baudrate: 60000000,
        bitorder: SPI.MSB,
        sck: 18,
        mosi: 19,
        miso: 16,
        pull: false
    };
    const spiGraphics = new SPI(0, spiGraphicsOptions);

    const gc = new graphics.BufferedGraphicsContext(480, 320,
        { rotation: 0, bpp: 16, bus: 0, sck: 18, mosi: 19, miso: 16, baudrate: 60000000, cmd: 9, cs: 21, reset: 8 });


    // guard touch behind a config option for now
    if (config.touch) {
        console.log('Init touch');

        touchInit(spiGraphics);
        onTouch(router.touch);
    }

    // set context for colors
    console.log('Init colors');
    colors.setContext(gc);

    console.log('Init renderer');
    renderer.setContext(gc);

    console.log('Init router');
    router.init(config.Routes);

    console.log('Init navigate to: ', config.defaultRoute);

    router.navigate(config.defaultRoute);
    console.log('Init complete');

    return {
        current: router.current,
        tick: router.tick,
        touch: router.touch,
        navigate: router.navigate,
        rerender: router.rerender
    }
}
