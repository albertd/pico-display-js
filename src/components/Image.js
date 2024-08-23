/**
 * Image component
 * 
 * @param {Object} props - Component properties
 * @param {number} props.x - x position of the image
 * @param {number} props.y - y position of the image
 * @param {number} props.w - width of the image
 * @param {number} props.h - height of the image
 * @param {number} props.bpp - bits per pixel (1, 4, 8)
 * @param {Uint8Array} props.data - image data (array of bytes representing the image or a base64 string)
 * @param {number} props.color - color bits (1, 2, 4, 8, 16)
 * @param {number} props.transparent - color value to be treated as transparent
 * @param {number} props.scaleX - scale factor for x axis default is 1
 * @param {number} props.scaleY - scale factor for y axis default is 1
 * @param {boolean} props.flipX - flip image on x axis
 * @param {boolean} props.flipY - flip image on y axis
 * 
 * @returns {void} 
 */

export const Image = (props = {}) => {
    const { x = 0, y = 0, w, h, bpp = 1, data, color = 1, transparent, scaleX, scaleY, flipX, flipY } = props;

    if (!data) {
        throw new Error('Image: No data provided!');
    }

    if (typeof data === 'string') {
        console.warn('Image: Data is a string, providing a UInt8Array is recommended');
    }

    const bitmap = {
        width: w,
        height: h,
        bpp,
        data
    }

    const options = {
        color,
        transparent,
        scaleX,
        scaleY,
        flipX,
        flipY
    }

    return {
        x,
        y,
        render: (ctx) => {
            if (!ctx) {
                throw new Error("Image: Context not set! Please set it before using .render()");
            }
            
            ctx.drawBitmap(x, y, bitmap, options);
        }
    }
}
