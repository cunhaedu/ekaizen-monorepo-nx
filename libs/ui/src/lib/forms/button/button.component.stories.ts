import {Meta, Story} from '@storybook/angular';
import { EkaizenButtonComponent } from './button.component';
import {EkaizenButtonModule} from "./button.module";

export default {
  title: 'Form/Button',
  component: EkaizenButtonComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'LABEL',
    variant: 'primary',
    size: 'md',
    disabled: false,
    full: false,
    loading: false,
  },
  argTypes: {
    variant: {
      type: 'string',
      control: {
        defaultValue: 'primary',
        type: 'inline-radio',
        options: ['primary', 'secondary']
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    full: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<EkaizenButtonComponent>;

const Template: Story<EkaizenButtonComponent> = args => ({
  moduleMetadata: {
    imports: [EkaizenButtonModule]
  },
  template: `
    <button
      ek-button
      [variant]="variant"
      [disabled]="disabled"
      [size]="size"
      [full]="full"
      [loading]="loading"
    >
      {{children}}
    </button>
  `,
  props: {
    ...args,
  },
})

export const primary = Template.bind({})

export const secondary = Template.bind({})

secondary.args = {
  variant: 'secondary'
}

export const tertiary = Template.bind({})

tertiary.args = {
  variant: 'tertiary'
}
