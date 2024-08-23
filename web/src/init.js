import colors from "../../src/constants/colors.js";
import renderer from "../../src/renderer/index.js";
import router from "../../src/router/index.js";
import display from "../../src/display/index.js";
import touch from "./touch.js"
import web from "./web.js"

const init = (config) => {
    if (!config) throw new Error('No config provided');
    if (!config.Routes) throw new Error('No Routes provided in config');
    if (!config.defaultRoute) throw new Error('No defaultRoute provided in config');

    console.log('init');

    console.log('Init display');
    display.setOn( () => {
            console.log('Display on');
    });
    
    display.setOff( () => {
        console.log('Display off');
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        
        // draw a dark gray rectangle
        ctx.fillStyle = '#333333';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // set center text "screen off" white color
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Screen Off', canvas.width / 2, canvas.height / 2);

        ctx.textAlign = 'left';
    });  

    // init graphics stack
    console.log('Init graphics');

    const gc = web.init(config.web);

    // guard touch behind a config option for now
    if (config.touch) {
        console.log('Init touch');
        touch.init();
        touch.onTouch(router.touch);
    }

    console.log('Init colors');
    colors.setContext(gc);

    console.log('Init renderer');
    renderer.setContext(gc);

    console.log('Init router');
    router.init(config.Routes);

    console.log('Init navigate to: ', config.defaultRoute);
    router.navigate(config.defaultRoute);

    return {
        current: router.current,
        tick: router.tick,
        touch: router.touch,
        navigate: router.navigate,
        rerender: router.rerender
    }
}

export default init;
