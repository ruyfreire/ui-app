import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TipCard } from '../src/components'

export default {
  title: 'Componentes/TipCard',
  component: TipCard,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    size: {
      defaultValue: 'medium'
    },
    variant: {
      defaultValue: 'warning'
    }
  }
} as ComponentMeta<typeof TipCard>

const Template: ComponentStory<typeof TipCard> = (args) => <TipCard {...args} />

export const Default = Template.bind({})
Default.storyName = 'Padrão'
