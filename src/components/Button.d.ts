import { Color } from "../constants/colors";

/**
 * Represents a button component.
 * @param props - The properties for the button.
 * @returns An object representing the button component.
 */
export function Button(props?: any): {
    x: number;
    y: number;
    w: number;
    h: number;
    color: Color;
    border: number;
    borderColor: Color;
    text: string;
    textColor: Color;
    render: (ctx: any) => void;
};
