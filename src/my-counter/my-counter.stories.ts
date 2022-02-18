import "./index";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
    title: 'Example/My Counter',
    component: 'my-counter',
    args: {
        value: 0,
        default: "My Count",
        ['--button-fill-color']: '#40527c',
        ['--button-text-color']: 'white',
        ['--button-border-radius']: '10rem',
        ['--border-color']: '#40527c',
        ['--border-size']: '2px',
    },
    parameters: {
        actions: {
            handles: ['updated'],
        },
    },
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args: any) => `
    <style>
        my-counter {
            --button-fill-color: ${args['--button-fill-color']};
            --button-text-color: ${args['--button-text-color']};
            --button-border-radius: ${args['--button-border-radius']};
            --border-color: ${args['--border-color']};
            --border-size: ${args['--border-size']};
        }

        my-counter::part(count) {
            ${args.count}
        }
    </style>
    <my-counter value="${args.value}">${args.default}</my-counter>
`;

export const Default: any = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Default.args = {};

export const PresetValue: any = Template.bind({});
PresetValue.args = {
    value: 6
};

export const BadInput: any = Template.bind({});
BadInput.args = {
    value: 'Test'
};

export const CustomStyles: any = Template.bind({});
CustomStyles.args = {
    ['--button-fill-color']: 'pink',
    ['--button-text-color']: 'black',
    ['--button-border-radius']: '1rem',
    ['--border-color']: 'brown',
    ['--border-size']: '5px',
    count: 'text-decoration:underline; font-weight:bold; color:#083cff;'
};
