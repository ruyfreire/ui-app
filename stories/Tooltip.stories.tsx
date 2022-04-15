import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tooltip, Button } from '../src/components'

export default {
  title: 'Componentes/Tooltip',
  component: Tooltip,
  argTypes: {
    text: {
      type: 'string',
      defaultValue: 'Botão com tooltip'
    },
    position: {
      defaultValue: 'bottom'
    }
  },
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button>Passe o mouse</Button>
  </Tooltip>
)

export const Default = Template.bind({})
Default.storyName = 'Padrão'
