import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../src/components/Button'

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    viewBox="0 0 16 16"
    width="24px"
    height="24px"
  >
    <path d="M 8 1.320313 L 0.660156 8.132813 L 1.339844 8.867188 L 2 8.253906 L 2 14 L 7 14 L 7 9 L 9 9 L 9 14 L 14 14 L 14 8.253906 L 14.660156 8.867188 L 15.339844 8.132813 Z M 8 2.679688 L 13 7.328125 L 13 13 L 10 13 L 10 8 L 6 8 L 6 13 L 3 13 L 3 7.328125 Z" />
  </svg>
)

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
    variant: {
      defaultValue: 'contained'
    },
    size: {
      defaultValue: 'medium'
    },
    startIcon: {
      type: 'symbol'
    },
    endIcon: {
      type: 'symbol'
    },
    onClick: {
      type: 'function'
    }
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const Icone: ComponentStory<typeof Button> = (args) => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Button {...args} startIcon={Svg} />

    <Button {...args} endIcon={Svg} />
  </div>
)
