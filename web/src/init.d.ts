export default init;
declare function init(config: any): {
    current: typeof router.current;
    tick: typeof router.tick;
    touch: typeof router.touch;
    navigate: typeof router.navigate;
    rerender: typeof router.rerender;
};
import router from "../../src/router/index.js";
