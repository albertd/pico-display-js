import Router from '../../../src/router/index.js';
import { Menu } from '../../components/Menu.js';
import { Button } from '../../../src/components/Button.js';
import { TextFlex } from '../../../src/components/TextFlex.js';

const template = {
    Menu: {
        type: Menu,
        x: 0,
        y: 0
    },
    ResetInstruction1: {
        type: TextFlex,
        color: 'white',
        fontScale: [2, 2],
        x: 20,
        y: 35,
        w: 440,
        text: `To reset the device to factory default settings press the button below. This will reset the device to factory default settings and remove all data from the device.`,
    },
    ResetBtn: {
        type: Button,
        x: 220,
        y: 265,
        w: 155,
        h: 45,
        text: 'Factory reset'
    },
    Back: {
        type: Button,
        x: 10,
        y: 265,
        w: 165,
        h: 45,
        text: '< Back'
    }
}

export const ResetSettings = {
    init: () => { return null; },
    destroy: () => { return null; },
    tick: (data) => { return null; },
    touch : (event) => {
        if (event.element === 'Back') {
            return Router.navigate('Settings');
        }

        if (event.element === 'ResetBtn') {
            return null; // FIXME RESET DEVICE HERE
        }
    },
    template : () => { return template; }
}
