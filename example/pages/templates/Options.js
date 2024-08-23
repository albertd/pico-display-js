import Router from '../../../src/router/index.js';

import { Button } from '../../../src/components/Button.js';
import { Menu } from '../../components/Menu.js';

const buttonWidth = 350;
const buttonSpacing = 20;
const buttonHeight = 45;
const buttonXPos = 70;

const generateButton = (text, offset) => {
    const yPos = 40 + (offset * (buttonHeight + buttonSpacing));

    return {
        type: Button,
        x: buttonXPos,
        y: yPos,
        w: buttonWidth,
        h: buttonHeight,
        text: text
    }
}

const backButton = {
    type: Button,
    x: 10,
    y: 265,
    w: 165,
    h: 45,
    text: '< Back'
}

const MenuItem = {
    type: Menu,
    x: 0,
    y: 0
}

export default (props) => {
    const template = {
        MenuItem: MenuItem,
    }

    props.buttons.forEach((button, index) => {
        template[button.text] = generateButton(button.text, index);
    });

    if (props.backButton) {
        template['Back'] = backButton;
    }

    return {
        init: () => { return null; },
        destroy: () => { return null; },
        tick: (data) => { return null; },
        touch : (event) => {
            if (event.element === 'Back') {
                return Router.navigate('Home');
            }

            props.buttons.forEach((button) => {
                if (event.element === button.text) {
                    return Router.navigate(button.route, button.props);
                }
            });
        },
        template : () => { return template; }
    }
}
