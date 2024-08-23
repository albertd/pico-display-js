let ctx;

const initialColorMap = {
    white: [255, 255, 255],
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
    black: [0, 0, 0],
}

const setContext = (gc) => {
    ctx = gc;
    for (const color in initialColorMap) {
        colors[color] = gc.color16(...initialColorMap[color]);
    }
}

const addColor = (name, r = 0, g = 0, b = 0) => {
    initialColorMap[name] = [r, g, b];
}

const colors = {
    setContext : setContext,
    addColor : addColor,
    white: null,
    red: null,
    green: null,
    blue: null,
    black: null,
}

export default colors;
