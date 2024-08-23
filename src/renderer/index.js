let ctx = null;
const setContext = (context) => {
    ctx = context;
}

const parseTemplateEntry = (obj = {}) => {
    let componentClass = obj.type;
    if (!componentClass) {
        throw new Error("Template entry missing type!");
    }

    if (typeof componentClass !== 'function') {
        throw new Error("Template entry type is not a function!", obj.type);
    }

    // instantiate the component
    const component = componentClass(obj);

    // delete type off of component
    delete component.type;
    return component;
}

const clear = () => {
    if (!ctx) {
        throw new Error("Context not set! Please set it before using .clear()");
    }

    ctx.clearScreen();
}

const renderComponent = (component, data) => {
    const parsedItem = parseTemplateEntry(component);
    // render it
    parsedItem.render(ctx, data);


    return parsedItem;
}

const render = (template, data) => {
    if (!ctx) {
        throw new Error("Context not set! Please set it before using .render()");
    }

    if (!template) {
        throw new Error("Template not provided!");
    }

    // console.log('Render', template);

    // parse template and render
    let tempParsedData = null;
    for (let key in template) {
        tempParsedData = renderComponent(template[key], data)
        delete tempParsedData.render
        template[key] = { ...template[key], ...tempParsedData };
    }

    // return the template
    return template;
}

export default {
    setContext,
    clear,
    render,
    renderComponent
}
