# Pico JS Display Engine for Kaluma

This is a simple render engine that draws stuff on the display attached to the pico running on [Kaluma](https://kalumajs.org/)

## How to use

You can use this project as follows:

1. Install/include this package
2. Include main index.js 
3. Initialise the render engine
4. The render engine returns an API

## Render engine API

The render engine returns the following APIs:
```
current()       - The currently active page
tick(data)      - Update the current page with data
touch()         - Touch data, including coordinates and elements touched
navigate(page)  - Navigate to a new page
rerender(data)  - Rerender the current page optional data object
```

The `tick` function is importent for when you want to update data to rerender a certain page or component. You can provide a `data` object that will be processed in the page `.tick()` and can be sent to rerender the template using the router `Router.rerender(data)` function.

All data parsing happens locally in the `Component` that is initialised

For example:

```js
const { init } = require('./src/index.js');

//initialise the renderer
const { tick } = init();

// update current page with data
const data = someApiGetData();
tick(data);
```

To force the UI to navigate to a new page:
```js

const { init } = require('./src/index.js');

//initialise the renderer
const { navigate } = init();

// force the UI to navigate to a page
navigate('newpage');
```

## Components

Each component is created in `./src/components` and these contain instantiable components that you can add in the UI.

The default components are:
* Rect - a simple rectangle
* Text - a simple text field
* Button - a configurable button that can be interacted with, basically a rectangle with text
* Text Flex - a larger dynamically split Text box for larger text

You can import your components directly into the pages you are going to make. Components do the actual drawing on the screen using the graphics context. Dont forget to include `translate` to handle text internationalisation.

You can create your own components directly into your project and import them into the page you are building. Just use one of the standard components as an example.

This is where the actual draw commands are, for example:

```js
    ctx.setFontColor( colors[ color ] );
    ctx.setFontScale(fontScale[0], fontScale[1]);
    ctx.drawText(x, y, '' + text);
```

In the `render()` of a Component.

## Page Templates

Pages are objects that return templates and optionally process data, the signature is always:

```js
export SomePage = {
    init: () => {},
    destroy: () => {},
    tick: (data) => {},
    touch: (event) => {},
    template () => { return {} }
}
```

The `init()` function will be called upon page creation and respectively `destroy()` on page destruction.

The `tick()` function is where we can process any dynamic data as part of the page to be called from the external engine.

The `touch(event)` is where you can handle touch events, note these require to process the `event` object with the `x` and `y` property of the touch event as well as the `element` that was touched (if any).

The `template()` returns a JSON template with the components, each component requires a unique `key` value, a `type`, render coordinates and dimensions (`x, y, w, h`) and optionally `values` such as `text` (dependent on the component used).

## Dynamic data

You can set a global let value in your component and refer to the value as you return the template on `template()`. For example:

```js
import { Button } from 'pico-display-js/components'

let someValue = 0;

export SomePage = {
    init: () => {},
    destroy: () => {},
    tick: (data) => {
        someValue = data.someValue;
        Router.rerender();
    },
    touch: (event) => {},
    template () => { return {
        Button: {
            type: Button,
            x: 280,
            y: 265,
            w: 165,
            h: 45,
            text: someValue
        }
    } }
}
```

You must call `Router.rerender()` or the changed values will not be updated upon change. Alternatively you can implement a timeout if the tick data comes in too frequent.

## Colors

Colors are defined in `src\constants\colors.js` - there is a set of default colors added for your project:

```js
    white: [255, 255, 255],
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
    black: [0, 0, 0],
```

Colors are defined with `RGB` and to use the colors you need to precreate the values when loading your project. If you wish to add additional colors to the stack you can do so using: `addColor` in `colors.js`, for example:

```js
    colors.addColor('blue', 12, 78, 145);
    colors.addColor('orange', 220, 62, 27);
    colors.addColor('yellow', 255, 199, 65);
    colors.addColor('gray', 192, 192, 192);
    colors.addColor('green', 35, 155, 158);
```

They can then be re-used in the components like this:                                                           
```js
    ctx.setColor(colors.blue);
```

## Translations (i18n)

The library supports translations in the built-in `Text`, `TextFlex` and `Button` components, for custom components the `translate` is exposed to implement directly. 

In order to use translations you can provide `_{XX}` language fields to `text` properties, for example for a simple Text object:

```js
Text: {
    type: text,
    x: 20,
    y: 20,
    text: 'This is a text object',
    text_nl: 'Dit is een text object',
    text_de: 'Dies ist ein Textobjekt'
}
```

Then inside of your UI you can change the language using `setLanguage()`, if no available translations are found it will default to the `text` field.
Note the language must be in a 2-letter language code in order for the system to understand it. For simplicity, there is currently no support for region specific languages such as en-GB versus en-US. You'll have to make due with just `en` for now.

# Web based development

For easy development you can launch your UI in a browser, the pico render engine will rely on a Canvas2D object in the browser and emulate a pico display for easy development. Please see the `./web` directory for more information.

If you want a demo: `npm run dev` or check out the included example app `npm run example` that also by default renders out in Canvas2D.

For your project you will need to create a seperate init path and include a simple `index.html` that refers to your web `.js` entry point.

# Docs

For documentation you can run:

```js
npm run docs
```

And open the `./docs` folder.