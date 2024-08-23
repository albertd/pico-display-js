// Display controls
let on = () => {};
let off = () => {};

export default {
    setOn: (fn) => {
        on = fn;
    },
    on: () => {
        on.call(this);
    },
    setOff: (fn) => {
        off = fn;
    },
    off: () => {
        off.call(this);
    }
}
