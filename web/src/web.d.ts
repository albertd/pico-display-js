declare namespace _default {
    export { init };
}
export default _default;
/**
 * Initializes the display with an optional configuration object.
 * @param config - The configuration object for the display.
 * @returns An object with various display functions.
 */
declare function init(config?: {}): {
    /**
     * Sets the fill color for subsequent drawing operations.
     * @param color - The fill color to set.
     */
    setFillColor: (color: any) => void;

    /**
     * Sets the color for subsequent drawing operations.
     * @param color - The color to set.
     */
    setColor: (color: any) => void;

    /**
     * Draws a rectangle on the display.
     * @param x - The x-coordinate of the top-left corner of the rectangle.
     * @param y - The y-coordinate of the top-left corner of the rectangle.
     * @param w - The width of the rectangle.
     * @param h - The height of the rectangle.
     */
    drawRect: (x: number, y: number, w: number, h: number) => void;

    /**
     * Draws a rounded rectangle on the display.
     * @param x - The x-coordinate of the top-left corner of the rectangle.
     * @param y - The y-coordinate of the top-left corner of the rectangle.
     * @param w - The width of the rectangle.
     * @param h - The height of the rectangle.
     * @param r - The radius of the rounded corners.
     */
    drawRoundRect: (x: number, y: number, w: number, h: number, r: number) => void;

    /**
     * Fills a rectangle on the display.
     * @param x - The x-coordinate of the top-left corner of the rectangle.
     * @param y - The y-coordinate of the top-left corner of the rectangle.
     * @param w - The width of the rectangle.
     * @param h - The height of the rectangle.
     */
    fillRect: (x: number, y: number, w: number, h: number) => void;

    /**
     * Fills a rounded rectangle on the display.
     * @param x - The x-coordinate of the top-left corner of the rectangle.
     * @param y - The y-coordinate of the top-left corner of the rectangle.
     * @param w - The width of the rectangle.
     * @param h - The height of the rectangle.
     * @param r - The radius of the rounded corners.
     */
    fillRoundRect: (x: number, y: number, w: number, h: number, r: number) => void;

    /**
     * Draws text on the display.
     * @param x - The x-coordinate of the starting position of the text.
     * @param y - The y-coordinate of the starting position of the text.
     * @param text - The text to draw.
     */
    drawText: (x: number, y: number, text: string) => void;

    /**
     * Sets the scale of the font.
     * @param xScale - The horizontal scale factor.
     * @param yScale - The vertical scale factor.
     */
    setFontScale: (xScale: number, yScale: number) => void;

    /**
     * Sets the color of the font.
     * @param color - The color to set.
     */
    setFontColor: (color: number) => void;

    /**
     * Measures the width and height of the given text.
     * @param text - The text to measure.
     * @returns An object with the width and height of the text.
     */
    measureText: (text: number) => {
        width: number;
        height: number;
    };

    /**
     * Clears the screen.
     */
    clearScreen: () => void;

    /**
     * Displays the contents of the display.
     */
    display: () => void;

    /**
     * Converts RGB values to a hexadecimal color string.
     * @param r - The red component of the color.
     * @param g - The green component of the color.
     * @param b - The blue component of the color.
     * @returns The hexadecimal color string.
     */
    color16: (r: number, g: number, b: number) => string;

    /**
     * Draws a bitmap on the display.
     * @param x - The x-coordinate of the top-left corner of the bitmap.
     * @param y - The y-coordinate of the top-left corner of the bitmap.
     * @param bitmapObj - The bitmap object to draw.
     * @param options - Additional options for drawing the bitmap.
     */
    drawBitmap: (x: number, y: number, bitmapObj: Uint16Array, options: object) => void;

    /**
     * Fills a circle on the display.
     * @param x - The x-coordinate of the center of the circle.
     * @param y - The y-coordinate of the center of the circle.
     * @param r - The radius of the circle.
     */
    fillCircle: (x: number, y: number, r: number) => void;

    /**
     * Draws a circle on the display.
     * @param x - The x-coordinate of the center of the circle.
     * @param y - The y-coordinate of the center of the circle.
     * @param r - The radius of the circle.
     */
    drawCircle: (x: number, y: number, r: number) => void;

    /**
     * Draws a line on the display.
     * @param x1 - The x-coordinate of the starting point of the line.
     * @param y1 - The y-coordinate of the starting point of the line.
     * @param x2 - The x-coordinate of the ending point of the line.
     * @param y2 - The y-coordinate of the ending point of the line.
     */
    drawLine: (x1: number, y1: number, x2: number, y2: number) => void;

    /**
     * Sets the color of a pixel on the display.
     * @param x - The x-coordinate of the pixel.
     * @param y - The y-coordinate of the pixel.
     * @param color - The color to set.
     */
    setPixel: (x: number, y: number, color: number) => void;
};
