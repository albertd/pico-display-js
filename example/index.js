// example index.js
import { init } from '../web/index.js';
import { Routes, defaultRoute } from './routes.js';

// init
init({
    Routes,
    defaultRoute,
    touch: true
});