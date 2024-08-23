/**
 * The default namespace for the renderer module.
 */
declare namespace _default {
    /**
     * Sets the context for rendering.
     */
    export { setContext };

    /**
     * Clears the rendered content.
     */
    export { clear };
    /**
     * Renders the content.
     */
    export { renderComponent };
    /**
     * Renders the content.
     */
    export { render };
}
export default _default;
declare function setContext(context: any): void;
declare function clear(): void;
declare function render(template: any, data: any, doNotClear?: boolean): any;
declare function renderComponent(component: any): any;
