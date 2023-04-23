import {Meta, Story} from '@storybook/angular';
import {EkaizenInputContainerComponent} from "./input-container.component";
import {EkaizenInputContainerModule} from "./input-container.module";
import {EkaizenInputModule} from "../input/input.module";

export default {
  title: 'Form/Input',
  component: EkaizenInputContainerComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Placeholder',
    prefix: '',
    suffix: '',
    disabled: false,
    type: 'text',
  },
  argTypes: {
    placeholder: {
      type: 'string',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    suffix: {
      type: 'string',
      description: '[OPTIONAL] Add a text after the input'
    },
    prefix: {
      type: 'string',
      description: '[OPTIONAL] Add a text before the input'
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<EkaizenInputContainerComponent>;

const Template: Story<EkaizenInputContainerComponent> = args => ({
  moduleMetadata: {
    imports: [EkaizenInputContainerModule, EkaizenInputModule]
  },
  template: `
    <div ek-input-container [prefix]="prefix" [suffix]="suffix">
      <input
        ek-input
        [placeholder]="placeholder"
        [disabled]="disabled"
        [type]="type"
       />
    </div>
  `,
  props: {
    ...args,
  },
})

export const Base = Template.bind({});
export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true
} as EkaizenInputContainerComponent;

export const WithPrefix = Template.bind({});

WithPrefix.args = {
  prefix: '$',
  type: 'number',
  placeholder: '0.00',
} as EkaizenInputContainerComponent;

export const WithSuffix = Template.bind({});

WithSuffix.args = {
  suffix: 'KG',
  type: 'number',
  placeholder: '0.00',
} as EkaizenInputContainerComponent;
