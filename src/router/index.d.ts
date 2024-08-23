/**
 * The default namespace for the router module.
 */
declare namespace _default {
    /**
     * Gets the current route.
     * @returns The current route.
     */
    export function current(): any;

    /**
     * Initializes the router.
     */
    export function init(): void;

    /**
     * Navigates to a new route.
     * @param route - The route to navigate to.
     */
    export function navigate(route: string): void;

    /**
     * Rerenders the current route.
     */
    export function rerender(): void;

    /**
     * Performs a tick in the router.
     */
    export function tick(): void;

    /**
     * Handles touch events in the router.
     * @param event - The touch event.
     */
    export function touch(event: TouchEvent): void;

    /**
     * Clears the router.
     */
    export function clear(): void;
}

export default _default;
declare function current(): any;
declare function init(routesObj: any): void;
declare function navigate(route: any, params?: {}): void;
declare function rerender(data: any, doNotClear?: boolean): void;
declare function tick(data: any): void;
declare function touch(data: any): void;
declare function clear(): void;
