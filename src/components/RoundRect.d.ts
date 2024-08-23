import { Color } from "../constants/colors";

/**
 * Represents a rounded rectangle component.
 *
 * @param props - The properties for the rounded rectangle.
 * @returns An object representing the rounded rectangle.
 */
export function RoundRect(props?: any): {
    x: number;
    y: number;
    w: number;
    h: number;
    color: Color;
    border: number;
    borderColor: Color;
    borderRadius: number;
    render: (ctx: any) => void;
};
