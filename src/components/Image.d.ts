import { Color } from "../constants/colors";

/**
 * Renders an image on the display.
 * @param props - The properties of the image.
 * @param props.x - The x-coordinate of the top-left corner of the image.
 * @param props.y - The y-coordinate of the top-left corner of the image.
 * @param props.w - The width of the image.
 * @param props.h - The height of the image.
 * @param props.bpp - The number of bits per pixel.
 * @param props.data - The pixel data of the image as a Uint8Array.
 * @param props.color - The color of the image.
 * @param props.transparent - The transparency value of the image.
 * @param props.scaleX - The horizontal scaling factor of the image.
 * @param props.scaleY - The vertical scaling factor of the image.
 * @param props.flipX - Whether to flip the image horizontally.
 * @param props.flipY - Whether to flip the image vertically.
 */
export function Image(props?: {
    x: number;
    y: number;
    w: number;
    h: number;
    bpp: number;
    data: Uint8Array;
    color: Color;
    transparent: number;
    scaleX: number;
    scaleY: number;
    flipX: boolean;
    flipY: boolean;
}): void;
