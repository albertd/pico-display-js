import colors from '../constants/colors.js';

/**
 * Rect Component
 * 
 * @param {*} props 
 * @param {*} props.x - x position of the button
 * @param {*} props.y - y position of the button
 * @param {*} props.w - width of the button
 * @param {*} props.h - height of the button
 * @param {*} props.color - color of the button
 * @param {*} props.border - border width of the button
 * @param {*} props.borderColor - border color of the button
 * @returns 
 */
export const RoundRect = (props = {}) => {
    const { x = 0, y = 0, w = 10, h = 10, color = 'white', border = 0, borderColor = 'white',  borderRadius = 0 } = props;

    return {
        x,
        y,
        w,
        h,
        color,
        border,
        borderColor,
        borderRadius,
        render: (ctx) => {
            if (!ctx) {
                throw new Error("Rect Context not set! Please set it before using .render()");
            }
            
            if (border && border > 0) {;
                ctx.setColor( colors[ borderColor ] );
                ctx.drawRoundRect(x, y, w + border, h + border,borderRadius)

                ctx.setFillColor( colors[ color ] );
                ctx.fillRoundRect(x + border, y + border, w - border, h - border,borderRadius);
            } else {
                ctx.setFillColor( colors[ color ] );
                ctx.fillRoundRect(x, y, w, h,borderRadius);
            }

        }
    }
}
