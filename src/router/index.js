/**
 * DOM-less browserless ubersimple router
 */

import Renderer from '../renderer/index.js';
import collision from '../touch/collision.js';

let routes = {};
let currentRoute = null;
let loadedTemplate = null;

const init = (routesObj) => {
    routes = routesObj;
}

const current = () => {
    return currentRoute ? routes[currentRoute] : null;
}

const navigate = (route, params = {}) => {
    const oldRoute = current();
    if (oldRoute && oldRoute.destroy) {
        oldRoute.destroy();
    }

    const newRoute = routes[route];
    if (!newRoute) {
        throw new Error(`Route ${route} not found!`);
    }

    currentRoute = route;
    if (newRoute.init) {
        newRoute.init();
    }

    console.log('Router: navigate', route);

    const template = newRoute.template(params);
    const renderedTemplate = Renderer.render(template);

    // update the template with the rendered template
    // this is required to enable touch events with expanded components
    loadedTemplate = renderedTemplate;
}

const rerender = (data, doNotClear = false) => {
    const route = current();
    if (!route) {
        throw new Error(`Route ${route} not found!`);
    }

    const template = route.template();
    Renderer.render(template, data);
}

const tick = (data) => {
    const currentRoute = current();

    if (!currentRoute) {
        throw new Error(`Route ${current()} not found!`);
    }

    if (!currentRoute.tick) {
        throw new Error(`Route ${currentRoute.route} does not have a tick function!`);
    }

    currentRoute.tick(data);
}

const touch = (data) => {
    const currentRoute = current();

    if (!currentRoute) {
        throw new Error(`Route ${data.route} not found!`);
    }

    if (!currentRoute.touch) {
        throw new Error(`Route ${data.route} does not have a touch function!`);
    }

    const template = loadedTemplate;
    const touchElement = collision(data, template);

    const event = {
        x: data.x,
        y: data.y,
        element: touchElement,
    }

    currentRoute.touch(event);
}

const clear = () => {
    // forward to renderer
    Renderer.clear();
}

export default {
    current,
    init,
    navigate,
    rerender,
    tick,
    touch,
    clear,
}
