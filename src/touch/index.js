const { touch } = require('touch');

let touchHandler;

const init = (spiHandle) => {
    if (!spiHandle) throw new Error('No SPI handle provided');
    touchHandler = new touch(1, 17, 22, 100, processTouch);
    return touchHandler;
}

let listeners = [];
const onTouch = (callback) => {
    listeners.push(callback);
}

export const processTouch = (xRaw, yRaw, z) => {

    if (!xRaw || !yRaw) return;
    const xResolution = 480;
    const yResolution = 320;

    // touch screen interface returns 0 to 2000 for x and y
    // maps to 0 to 480 for x and 0 to 320 for y
    const x = Math.round((xRaw - 0) * (xResolution / 2000));
    const y = Math.round((yRaw - 0) * (yResolution / 2000));

    const coordinates = {
        x,
        y
    }

    console.log('touch', coordinates);
    listeners.forEach((listener) => {
        listener(coordinates);
    });
}

export {
    init,
    onTouch
}
