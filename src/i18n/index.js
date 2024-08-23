// simple i18n implementation
let language = 'en'
/**
 * Sets the language for translation.
 * @param {string} l - The language code.
 * @throws {Error} If language is not provided or is not a 2 letter code.
 */
export const setLanguage = (l) => {
    if (!l) throw new Error('Language is required');
    if (l.length !== 2) throw new Error('Language must be a 2 letter code');

    language = l
}

/**
 * Translates the given template based on the language.
 * @param {object} template - The translation template.
 * @param {string} [baseElement='text'] - The base element to translate.
 * @returns {string} The translated text.
 */
export const translate = (template, baseElement = 'text') => {
    const defaultText = template[baseElement];
    const translatedText = template[baseElement + '_' + language];
    return translatedText || defaultText;
}

