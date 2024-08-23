import Options from './templates/Options.js';

export const Settings = Options({
    backButton: true,
    nextButton: false,
    buttons: [
        {
            text: 'Wifi',
            route: 'WifiSettings'
        },
        {
            text: 'Temperature',
            route: 'TemperatureSettings'
        },
        {   
            text: 'Reset',
            route: 'ResetSettings'
        }
    ]
});