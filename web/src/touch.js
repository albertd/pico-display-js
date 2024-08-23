//touch.js for web
const init = () => {
    const canvas = document.querySelector('canvas');

    if (!canvas) {
        throw new Error('No canvas element found');
    }

    canvas.addEventListener('touchend', (e) => {
        const x = e.changedTouches[0].clientX;
        const y = e.changedTouches[0].clientY;

        const coordinates = {
            x,
            y
        }

        listeners.forEach((listener) => {
            listener(coordinates);
        });
    });
}

let listeners = [];
const onTouch = (callback) => {
    listeners.push(callback);
}

export default { init, onTouch };