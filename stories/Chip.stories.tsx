import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Chip } from '../src/components'

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    width="100%"
    height="100%"
  >
    <path d="M 8 1.320313 L 0.660156 8.132813 L 1.339844 8.867188 L 2 8.253906 L 2 14 L 7 14 L 7 9 L 9 9 L 9 14 L 14 14 L 14 8.253906 L 14.660156 8.867188 L 15.339844 8.132813 Z M 8 2.679688 L 13 7.328125 L 13 13 L 10 13 L 10 8 L 6 8 L 6 13 L 3 13 L 3 7.328125 Z" />
  </svg>
)

export default {
  title: 'Componentes/Chip',
  component: Chip,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Chip'
    },
    size: {
      defaultValue: 'small'
    },
    icon: {
      type: 'symbol'
    },
    disabled: {
      type: 'boolean',
      defaultValue: false
    },
    selected: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => {
  const [selected, setSelected] = useState(false)

  return (
    <Chip
      {...args}
      onClick={() => setSelected(!selected)}
      selected={args.selected || selected}
    />
  )
}

export const Default = Template.bind({})
Default.storyName = 'Padrão'

export const Icon = Template.bind({})
Icon.args = {
  icon: Svg
}
Icon.storyName = 'Com ícone'
