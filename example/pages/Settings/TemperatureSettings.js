import Options from '../templates/Options.js';

export const TemperatureSettings = Options({
    backButton: true,
    nextButton: false,
    buttons: [
        {
            text: 'Temperature',
            route: 'TemperatureSettingsPrompt',
            props: {
                type: 'Temperature'
            }
        },
    ]
});
