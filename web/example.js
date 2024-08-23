import { init } from './index.js';

import { Rect } from '../src/components/Rect.js';
import { Button } from '../src/components/Button.js';
import { Text } from '../src/components/Text.js';

const TestPage = {
    init: () => { return null; },
    destroy: () => { return null; },
    tick: (data) => { return null; },
    touch : (event) => { console.log('TestPage touch', event); },
    template : () => { return {
        TestRect: {
            type: Rect,
            x: 20,
            y: 40,
            w: 100,
            h: 100,
            color: 'red',
            border: 10,
            borderColor: 'blue'
        },
        TestButton: {
            type: Button,
            x: 20,
            y: 160,
            w: 100,
            h: 40,
            border: 1,
            borderColor: 'blue',
            text: 'Test Button',
            textColor: 'black',
        },
        TestText: {
            type: Text,
            x: 20,
            y: 220,
            text: 'Test Text'
        }
    
    }}
}

const Routes = {
    Home: TestPage
}

init({
    web: {
        width: 480,
        height: 320
    },
    touch: true,
    Routes: Routes,
    defaultRoute: 'Home'
});
