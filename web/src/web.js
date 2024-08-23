//web.js
const init = (config = {}) => {
    // make sure previous canvas is removed
    const oldCanvas = document.querySelector('canvas');
    if (oldCanvas) {
        document.body.removeChild(canvas);
    }

    // create canvas2d object
    const canvas = document.createElement('canvas');
    canvas.width = config.width || 480;
    canvas.height = config.height || 320;
    canvas.style.border = '1px solid green';

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    return {
        setFillColor: (color) => {
            ctx.fillStyle = color;
        },
        setColor: (color) => {
            ctx.strokeStyle = color;
        },
        // outline
        drawRect: (x, y, w, h) => {
            ctx.strokeRect(x, y, w, h);
        },
        drawRoundRect: (x, y, w, h, r) => {
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, r);
            ctx.stroke();
        },
        // fill
        fillRect: (x, y, w, h) => {
            ctx.fillRect(x, y, w, h);
        },
        fillRoundRect: (x, y, w, h, r) => {
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, r);
            ctx.fill();
        },
        drawText: (x, y, text) => {
            ctx.textBaseline = 'top';
            ctx.fillText(text, x, y);
        },
        setFontScale: (xScale, yScale) => {
            const basePx = 8;
            ctx.font = `${basePx * xScale}px sans-serif`;
        },
        setFontColor: (color) => {
            ctx.fillStyle = color;
        },
        measureText: (text) => {
            const m = ctx.measureText(text);
            return {
                width: m.width,
                height: 20 // fixme CanvasTextMetrics doesn't have height
            }
        },
        clearScreen: () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        },
        display: () => {
            // nothing needed here
        },
        // this isn't needed for web, but we'll add it for parity
        color16: (r, g, b) => {
            return `rgb(${r} ${g} ${b})`;
        },
        drawBitmap: (x, y, bitmapObj, options) => {
            const { data, width, height } = bitmapObj;
            const imageData = ctx.createImageData(width, height);
            imageData.data.set(data);
            ctx.putImageData(imageData, x, y);
        },
        fillCircle: (x, y, r) => {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.fill();
        },
        drawCircle: (x, y, r) => {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.stroke();
        },
        drawLine: (x1, y1, x2, y2) => {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        },
        setPixel: (x, y, color) => {
            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

export default { 
    init
}