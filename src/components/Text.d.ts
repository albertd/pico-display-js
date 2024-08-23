import { Color } from "../constants/colors";

/**
 * Represents a text component.
 * @param props - The properties for the text component.
 * @returns An object representing the text component.
 */
export function Text(props?: any): {
    x: number;
    y: number;
    color: Color;
    fontScale: [number, number];
    text: string;
    render: (ctx: any) => void;
};
