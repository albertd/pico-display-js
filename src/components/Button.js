import colors from '../constants/colors.js';
import { translate } from '../i18n/index.js';

const counterColorMapping = {
    'black': 'white',
    'white': 'black',
    'blue' : 'white',
    'red'  : 'white',
    'green': 'black'
}

/**
 * Button Component
 * 
 * @param {*} props 
 * @param {*} props.x - x position of the button
 * @param {*} props.y - y position of the button
 * @param {*} props.w - width of the button
 * @param {*} props.h - height of the button
 * @param {*} props.color - color of the button
 * @param {*} props.border - border width of the button
 * @param {*} props.borderColor - border color of the button
 * @param {*} props.text - text to display on the button
 * @param {*} props.textColor - text color of the button
 * @returns 
 */
export const Button = (props = {}) => {
    let { x = 0, y = 0, w = 20, h = 10, color = 'white', border = 0, borderColor = 'white', text = '', textColor } = props;

    return {
        x,
        y,
        w,
        h,
        color,
        border,
        borderColor,
        text,
        textColor,
        render: (ctx) => {
            if (!ctx) {
                throw new Error("Rect Context not set! Please set it before using .render()");
            }

            if (!textColor) {
                textColor = counterColorMapping[ color ];
            }

            ctx.setFontScale(3, 3);
            const textBounds = ctx.measureText(text);
    
            const textPadding = 10;
            if (h < textBounds.height + textPadding) {
                h = textBounds.height + textPadding;
                console.log('Button: text out of bounds, increasing button height', h);
            }
    
            if (w < textBounds.width + textPadding) {
                w = textBounds.width + textPadding;
                console.log('Button: text out of bounds, increasing button width', w);
            }
    
            ctx.setFillColor( colors[ color ] );
            ctx.fillRect(x, y, w, h);
    
            if (border > 0) {
                ctx.setColor( colors[ borderColor ] );
                ctx.drawRect(x + border, y + border, w - border, h - border);
            }
    
            ctx.setFontColor( colors[ textColor ] );
            const textX = x + (w / 2) - (textBounds.width / 2);
            const textY = y + (h / 2) - (textBounds.height / 2);

            const translatedText = translate(props, 'text');
            ctx.drawText(textX, textY, translatedText);
        }
    }
}
