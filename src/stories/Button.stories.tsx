import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MdOutlineAdd, MdKeyboardArrowRight } from 'react-icons/md'

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
    <Button {...args} startIcon={<MdOutlineAdd />} />

    <Button {...args} endIcon={<MdKeyboardArrowRight />} />
  </div>
)
