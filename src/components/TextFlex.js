import colors from '../constants/colors.js';
import { translate } from '../i18n/index.js';

const generateText = (text, maxWidth = 350,  ctx) => {
    //check for \n
    const lines = text.split('\n');
    const renderLines = [];

    lines.forEach((line, index) => {
        // check if line is too long
        if (ctx.measureText(line).width > maxWidth) {
            const words = line.split(' ');
            let tempLine = '';
            let tempLines = [];

            words.forEach((word) => {
                if (ctx.measureText(tempLine + word).width > maxWidth) {
                    tempLines.push(tempLine);
                    tempLine = word + ' ';
                } else {
                    tempLine += word + ' ';
                }
            });

            tempLines.push(tempLine);
            renderLines.push(...tempLines);
        } else {
            renderLines.push(line);
        }
    });

    return renderLines;
}

/**
 * Text Component with Flex box
 * 
 * @param {*} props
 * @param {*} props.x - x position of the text
 * @param {*} props.y - y position of the text
 * @param {*} props.w - width of the text
 * @param {*} props.color - color of the text
 * @param {*} props.fontScale - font scale of the text
 * @param {*} props.text - text to display
 * @param {*} props.linePadding - padding between lines
 * @returns 
 */
export const TextFlex = (props = {}) => {
    const { x = 0, y = 0, w = 350, color = 'white', fontScale = [2,2], text = '', linePadding = 2} = props;

    return {
        x,
        y,
        w,
        color,
        fontScale,
        text,
        linePadding,
        render: (ctx) => {
            if (!ctx) {
                throw new Error("Text: Context not set! Please set it before using .render()");
            }
            
            ctx.setFontColor( colors[ color ] );
            ctx.setFontScale(fontScale[0], fontScale[1]);
            
            const translatedText = translate(props, 'text');
            const lines = generateText(translatedText, w, ctx);

            lines.forEach((line, index) => {
                const textHeight = ctx.measureText(line).height;
                // console.log('Flex text height: ', textHeight, index, linePadding, ( (textHeight + linePadding) * index));
                ctx.drawText(x, y + ( (textHeight + linePadding) * index), '' + line);
            });
        }
    }
}
