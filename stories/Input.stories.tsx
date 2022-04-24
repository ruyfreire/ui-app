import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from '../src/components'

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M11.6832 2.27869C6.5285 2.27869 2.34985 6.4577 2.34985 11.612C2.34985 16.7664 6.5285 20.9454 11.6832 20.9454C13.826 20.9454 15.8571 20.2092 17.4324 18.9959L22.5112 24.1176C22.9669 24.5726 23.7328 24.5726 24.1885 24.1176C24.644 23.6614 24.644 22.8961 24.1885 22.4399L19.0744 17.3532C20.2886 15.7782 21.0165 13.7552 21.0165 11.612C21.0165 6.4577 16.8379 2.27869 11.6832 2.27869ZM11.6832 4.61203C15.5492 4.61203 18.6832 7.7457 18.6832 11.612C18.6832 15.4784 15.5492 18.6121 11.6832 18.6121C7.8172 18.6121 4.68319 15.4784 4.68319 11.612C4.68319 7.7457 7.8172 4.61203 11.6832 4.61203Z"
      fill="url(#paint0_linear_2417_11186)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2417_11186"
        x1="13.44"
        y1="2.27869"
        x2="13.44"
        y2="24.4588"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset="1" stopColor="currentColor" />
      </linearGradient>
    </defs>
  </svg>
)

export default {
  title: 'Componentes/Input',
  component: Input,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: ''
    },
    error: {
      type: 'string',
      defaultValue: ''
    },
    align: {
      defaultValue: 'left'
    },
    placeholder: {
      type: 'string',
      defaultValue: 'Placeholder'
    },
    icon: {
      type: 'symbol'
    },
    id: {
      type: 'string',
      defaultValue: 'input'
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('')

  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export const Default = Template.bind({})
Default.storyName = 'Padrão'

export const Icon = Template.bind({})
Icon.storyName = 'Com ícone'
Icon.args = {
  icon: Svg,
  placeholder: 'Pesquisar'
}
