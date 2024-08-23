import { default as Router } from './src/router/index.js';
import { default as colors } from './src/constants/colors.js';
import { default as display } from './src/display/index.js';
import { default as Renderer } from './src/renderer//index.js';
import { translate, setLanguage } from './src/i18n/index.js';

export {
    Router,
    Renderer,
    colors,
    translate,
    setLanguage,
    display
}

