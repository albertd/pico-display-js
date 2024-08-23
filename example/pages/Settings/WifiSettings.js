import Router from '../../../src/router/index.js';
import { Menu } from '../../components/Menu.js';
import { Button } from '../../../src/components/Button.js';
import { TextFlex } from '../../../src/components/TextFlex.js';
import { Text } from '../../../src/components/Text.js';
import { Rect } from '../../../src/components/Rect.js';

let ssid = 'Banaan';
let signalStrength = -85;

const signalBarHeight = 10;
const signalBarWidth = 5;

const template = {
    Menu: {
        type: Menu,
        x: 0,
        y: 0
    },
    ConnectedToText: {
        type: Text,
        color: 'white',
        fontScale: [2, 2],
        x: 10,
        y: 35,
        text: 'Currently connected to:',
    },
    ConnectedToSSID: {
        type: Text,
        color: 'blue',
        fontScale: [3, 3],
        x: 40,
        y: 35 + 45,
        text: ssid,
    },
    signalBar1: {
        type: Rect,
        color: 'white',
        x: 300,
        y: 35 + 40 + signalBarHeight + signalBarHeight,
        w: signalBarWidth,
        h: signalBarHeight,
        // border: 1,
        // borderColor: 'white'
    },
    signalBar2: {
        type: Rect,
        color: 'black',
        x: 300 + (2*signalBarWidth),
        y: 35 + 40 + signalBarHeight,
        w: signalBarWidth,
        h: signalBarHeight + signalBarHeight,
        border: 1,
        borderColor: 'white'
    },
    signalBar3: {
        type: Rect,
        color: 'black',
        x: 300 + (4*signalBarWidth),
        y: 35 + 40,
        w: signalBarWidth,
        h: signalBarHeight + signalBarHeight + signalBarHeight,
        border: 1,
        borderColor: 'white'
    },
    ResetInstructionsText: {
        type: TextFlex,
        color: 'white',
        fontScale: [2, 2],
        w: 480 - 20,
        x: 10,
        y: 35 + 45 + 45 + 10,
        text: `To disconnect from the current network press the button below. To connect to a new network please use the app.`,
    },
    ResetBtn: {
        type: Button,
        x: 260,
        y: 265,
        w: 155,
        h: 45,
        text: 'Reset Wifi'
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

export const WifiSettings = {
    init: () => { return null; },
    destroy: () => { return null; },
    tick: (data) => { return null; },
    touch : (event) => { 
        if (event.element === 'Back') {
            return Router.navigate('Settings');
        }

        if (event.element === 'ResetBtn') {
            return null; // FIXME RESET WIFI HERE
        }
    },
    template : () => { 
        template.ConnectedToSSID.text = ssid.length > 25 ? ssid.substring(0, 20) + '...' : ssid;

        if (signalStrength > -30) {
            template.signalBar1.color = 'white';
            template.signalBar1.border = 0;
            template.signalBar2.color = 'white';
            template.signalBar2.border = 0;
            template.signalBar3.color = 'white';
            template.signalBar3.border = 0;
        } else if (signalStrength > -55) {
            template.signalBar1.color = 'white';
            template.signalBar1.border = 0;
            template.signalBar2.color = 'white';
            template.signalBar2.border = 0;
            template.signalBar3.color = 'black';
        } else if (signalStrength > -70) {
            template.signalBar1.color = 'white';
            template.signalBar1.border = 0;
            template.signalBar2.color = 'black';
            template.signalBar3.color = 'black';
        } else if (signalStrength < -80) {
            template.signalBar1.color = 'black';
            template.signalBar2.color = 'black';
            template.signalBar3.color = 'black';
        }

        return template;
    }
}
