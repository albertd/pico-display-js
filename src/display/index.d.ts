/**
 * Namespace containing functions for controlling the display.
 */
declare namespace _default {
    /**
     * Sets the callback function to be executed when the display is turned on.
     * 
     * @param fn - The callback function to be executed.
     */
    function setOn(fn: any): void;

    /**
     * Turns on the display.
     */
    function on(): void;

    /**
     * Sets the callback function to be executed when the display is turned off.
     * 
     * @param fn - The callback function to be executed.
     */
    function setOff(fn: any): void;

    /**
     * Turns off the display.
     */
    function off(): void;
}
export default _default;
