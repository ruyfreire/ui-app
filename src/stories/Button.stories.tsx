import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/Button'

export default {
  title: 'Componentes/Botão',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Botão'
    },
    color: {
      defaultValue: 'primary'
    },
    size: {
      defaultValue: 'medium'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
