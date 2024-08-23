import Router from '../../src/router/index.js';
import { Rect } from '../../src/components/Rect.js';
import { Text } from '../../src/components/Text.js';

const height = 320;
const textPos = height / 2 - 20;

const template = {
    GreenRect : {
        type: Rect,
        color: 'green',
        border: 0,
        x: 0,
        y: 0,
        w: 480 / 2,
        h: 320,
    },
    BlackRect : {
        type: Rect,
        color: 'black',
        border: 0,
        x: 480 / 2,
        y: 0,
        w: 480 / 2,
        h: 320,
    },
    PicoText : {
        type: Text,
        color: 'black',
        fontScale: [5, 5],
        x: 10,
        y: textPos,
        text: 'Pico'
    },
    BlackTextRect : {
        type: Rect,
        color: 'black',
        border: 0,
        x: 480 / 2 - 105,
        y: textPos - 20,
        w: 160,
        h: 80,
    },
    DisplayText : {
        type: Text,
        color: 'black',
        fontScale: [5, 5],
        x: 480 / 2 - 95,
        y: textPos,
        text: 'Display'
    },
    JsText : {
        type: Text,
        color: 'white',
        fontScale: [5, 5],
        x: 480 / 2 + 60,
        y: textPos,
        text: 'JS'
    },
}

export const Splash = {
    init: () => {
        template.PicoText.x = -350;
        template.JsText.x = 500;

        // animate the splash screen, next and black text should fly into the screen
        // and green should appear at the end

        const animationTime = 1600;
        const animationSteps = 20;

        const animate = (step) => {
            if (step > animationSteps) {
                setTimeout(() => {
                    Router.navigate('Home');
                }, 2000);

                return;
            }

            // nextX should progressively slow down as it approaches 0
            // and start at -350 and end at 20
            const nextX = -110 + (step * (165 / animationSteps));
            template.PicoText.x = nextX;

            // jsX should progressively slow down as it approaches 300
            // and start at 500 and end at 300
            const jsX = 470 - (step * (170 / animationSteps));
            template.JsText.x = jsX;

            // green should appear at the last step
            if (step >= animationSteps) {
                template.DisplayText.color = 'green';
            }

            Router.rerender();

            // schedule next animate with a timeout
            setTimeout(() => {
                animate(step + 1);
            }, animationTime / animationSteps);

        }

        setTimeout(() => {
            animate(0);
        }, 200); 
    },
    destroy: () => { return null; },
    tick: (data) => { return null; },
    touch : (event) => { return null; },
    template : () => { return template; }
}
