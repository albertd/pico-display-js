/**
 * Initializes the Pico Display with the provided configuration.
 * @param config The configuration object for the Pico Display.
 * @returns An object with various methods for interacting with the Pico Display.
 */
export function init(config: any): {
    current: typeof router.current;
    tick: typeof router.tick;
    touch: typeof router.touch;
    navigate: typeof router.navigate;
    rerender: typeof router.rerender;
};
import router from "../src/router/index.js";
