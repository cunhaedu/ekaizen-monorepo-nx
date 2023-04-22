import { themes } from '@storybook/theming';

const preview = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  parameters: {
    layout: 'centered',
  },
}

export default preview;
