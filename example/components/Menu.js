import colors from '../../src/constants/colors.js';

export const Menu = (props = {}) => {
    let { x = 0, y = 0, fontColor = 'white', fontScale = [2,2], statusText = 'WIFI:', status = 'Connected!', lineColor = 'white' } = props;

    return {
        x,
        y,
        fontColor,
        fontScale,
        statusText,
        status,
        lineColor,
        render: (ctx) => {
            if (!ctx) {
                throw new Error("Menu Context not set! Please set it before using .render()");
            }

            ctx.setFillColor( colors[ 'white' ] );
            ctx.fillRect(x, y, 480, 22);

            // menu bar
            ctx.setFontColor( colors['black'] );
            ctx.setFontScale(fontScale[0], fontScale[1]);

            //Next and Energy in white, Green in green
            const yOffset = 3;
            ctx.drawText(x + 15, y + yOffset, 'Pico');
            ctx.setFontColor( colors['green'] );

            ctx.drawText(x + 5 + 50, y + yOffset, 'Display');
            ctx.setFontColor( colors['black'] );

            ctx.drawText(x + 5 + 50 + 60, y + yOffset, 'JS');

            // measure text
            const statusTextLength = ctx.measureText(statusText);
            const statusLength = ctx.measureText('' + status);

            ctx.drawText(480 - statusLength.width - statusTextLength.width, y + yOffset, statusText);
            ctx.setFontColor( colors['green'] );
            ctx.drawText(480 - statusLength.width, y + yOffset, '' + status);
        }
    }
}