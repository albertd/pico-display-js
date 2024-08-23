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
export const Rect = (props = {}) => {
    const { x = 0, y = 0, w = 10, h = 10, color = 'white', border = 0, borderColor = 'white' } = props;

    return {
        x,
        y,
        w,
        h,
        color,
        border,
        borderColor,
        render: (ctx) => {
            if (!ctx) {
                throw new Error("Rect Context not set! Please set it before using .render()");
            }
            
            if (border && border > 0) {;
                ctx.setColor( colors[ borderColor ] );
                ctx.drawRect(x, y, w + border, h + border)

                ctx.setFillColor( colors[ color ] );
                ctx.fillRect(x + border, y + border, w - border, h - border);
            } else {
                ctx.setFillColor( colors[ color ] );
                ctx.fillRect(x, y, w, h);
            }

        }
    }
}
