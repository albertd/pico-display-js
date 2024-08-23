import colors from '../constants/colors.js';
import { translate } from '../i18n/index.js';

/**
 * Text Component
 * 
 * @param {*} props
 * @param {*} props.x - x position of the text
 * @param {*} props.y - y position of the text
 * @param {*} props.font - font of the text
 * @param {*} props.color - color of the text
 * @param {*} props.fontScale - font scale of the text
 * @param {*} props.text - text to display
 * @returns 
 */
export const Text = (props = {}) => {
    const { x = 0, y = 0, font = "LeeSans", color = 'white', fontScale = [2,2], text = '' } = props;

    return {
        x,
        y,
        color,
        fontScale,
        text,
        render: (ctx) => {
            if (!ctx) {
                throw new Error("Text: Context not set! Please set it before using .render()");
            }
            
            ctx.setFontColor( colors[ color ] );
            ctx.setFontScale( fontScale[0], fontScale[1] );

            const translatedText = translate(props, 'text');
            ctx.drawText(x, y, '' + translatedText);
        }
    }
}
