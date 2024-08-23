export default colors;
/**
 * Namespace for color-related functions and variables.
 */
declare namespace colors {
    /**
     * Sets the context for color operations.
     */
    export { setContext };

    /**
     * Adds a new color to the color palette.
     */
    export { addColor };

    /**
     * Represents the white color.
     */
    export let white: any;

    /**
     * Represents the red color.
     */
    export let red: any;

    /**
     * Represents the green color.
     */
    export let green: any;

    /**
     * Represents the blue color.
     */
    export let blue: any;

    /**
     * Represents the black color.
     */
    export let black: any;
}
declare function setContext(gc: any): void;
declare function addColor(name: any, r?: number, g?: number, b?: number): void;


export type ColorRGB = [ number, number, number ];
export type Color = number;