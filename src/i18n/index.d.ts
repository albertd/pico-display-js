/**
 * Sets the language for the application.
 * @param l - The language code to set.
 */
export function setLanguage(l: string): void;
/**
 * Translates the given template object into a string using the specified base element.
 * 
 * @param template - The template object to translate.
 * @param baseElement - The base element to use for translation. Optional.
 * @returns The translated string.
 */
export function translate(template: object, baseElement?: string): string;
