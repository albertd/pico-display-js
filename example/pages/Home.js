import Router from '../../src/router/index.js';

import { Menu } from '../components/Menu.js';
import { DeviceStatus } from '../components/DeviceStatus.js';
import { Button } from '../../src/components/Button.js';

let voltage = 0;
let amperage = 0;
let wattage = 0;
let frequency = 0;
let coreTemperature = 0;

export const Home = {
    init: () => { return null; },
    destroy: () => { return null; },
    tick: (data) => { 
        // remap data here
        voltage = data.voltage;
        amperage = data.amperage;
        wattage = data.wattage;
        frequency = data.frequency;
        coreTemperature = data.coreTemperature;

        // rerender with updated data
        Router.rerender(data);
     },
    touch : (event) => { 
        if (event.element === 'Button') {
            return Router.navigate('Settings');
        }
    },
    template : () => { return { 
        Menu: {
            type: Menu,
            x: 0,
            y: 0
        },
        DeviceStatus: {
            type: DeviceStatus,
            x: 20,
            y: 40,
            coreTemperature,
            voltage,
            amperage,
            wattage,
            frequency
        },
        Button: {
            type: Button,
            x: 280,
            y: 265,
            w: 165,
            h: 45,
            text: 'Settings',
        }
    }}
}
