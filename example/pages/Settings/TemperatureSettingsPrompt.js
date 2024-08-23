import Router from '../../../src/router/index.js';
import { Button } from '../../../src/components/Button.js';
import { Text } from '../../../src/components/Text.js';
import { Menu } from '../../components/Menu.js';

// FIXME this needs to be dynamic
let temperatureValue = 50;

const template = {
    Menu: {
        type: Menu,
        x: 0,
        y: 0
    },
    TemperatureType: {
        type: Text,
        x: 20,
        y: 40,
        w: 120,
        h: 30,
        fontScale: [3, 3],
        text: ''
    },
    TemperatureValue: {
        type: Text,
        color: 'white',
        fontScale: [4, 4],
        x: 480 / 2 - 20,
        y: 320 / 2 - 10,
    },
    PlusBtn: {
        type: Button,
        x: 480 / 2 + 50,
        y: 320 / 2 - 15,
        w: 120,
        h: 50,
        fontScale: [2, 2],
        text: '+'
    },
    MinusBtn: {
        type: Button,
        x: 480 /2 - 50 - 120,
        y: 320 / 2 - 15,
        w: 120,
        h: 50,
        fontScale: [2, 2],
        text: '-'
    },
    SaveBtn: {
        type: Button,
        x: 300,
        y: 265,
        w: 155,
        h: 45,
        text: 'Save'
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

export const TemperatureSettingsPrompt = {
    init: () => { return null; },
    destroy: () => { return null; },
    tick: (data) => { return null; },
    touch : (event) => { 
        if (event.element === 'Back') {
            return Router.navigate('TemperatureSettings');
        }

        if (event.element === 'PlusBtn') {
            temperatureValue += 1;
            return Router.rerender();
        }

        if (event.element === 'MinusBtn') {
            temperatureValue -= 1;
            return Router.rerender();
        }

        if (event.element === 'SaveBtn') {
            // FIXME save the value here
            return Router.navigate('TemperatureSettings');
        }
    },
    template : (params = {}) => { 
        if (params.type) {
            template.TemperatureType.text =  '' + params.type;
        }

        // FIXME this needs to be dynamic on ticks
        template.TemperatureValue.text = temperatureValue;

        return template; 
    }
}
