import { Color } from "../constants/colors";

/**
 * Represents a rectangular shape.
 * @param props - The properties of the rectangle.
 * @returns An object representing the rectangle.
 */
export function Rect(props?: any): {
    x: number;
    y: number;
    w: number;
    h: number;
    color: Color;
    border: number;
    borderColor: Color;
    render: (ctx: any) => void;
};
