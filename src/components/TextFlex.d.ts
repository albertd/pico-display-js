import { Color } from "../constants/colors";

/**
 * Represents a text component that can be flexed.
 * @param props - The properties for the text component.
 * @returns An object representing the text component.
 */
export function TextFlex(props?: any): {
    x: number;
    y: number;
    w: number;
    color: Color;
    fontScale: [number, number];
    text: string;
    linePadding: number;
    render: (ctx: any) => void;
};
