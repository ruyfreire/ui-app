import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Box } from '../src/components'
import { theme } from '../src/theme'

export default {
  title: 'Componentes/Box',
  component: Box,
  argTypes: {
    bgColor: { defaultValue: theme.colors.secondary.dark },
    radius: {
      table: {
        type: {
          summary: 'Objeto',
          detail:
            '{ topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number }'
        }
      }
    },
    border: {
      table: {
        type: {
          summary: 'Objeto',
          detail:
            '{ width?: number, color?: string, style?: string<CssBorderStyleProperty> }'
        }
      }
    }
  }
} as ComponentMeta<typeof Box>

const TemplateDefault: ComponentStory<typeof Box> = (args) => (
  <Box bgColor={theme.colors.white2} p={1}>
    <Box {...args}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia porro
        suscipit consequuntur nulla alias ex iste.
      </p>
    </Box>

    <Box {...args}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia porro
        suscipit consequuntur nulla alias ex iste.
      </p>
    </Box>
  </Box>
)

export const Default = TemplateDefault.bind({})
Default.storyName = 'Padrão'
Default.args = {
  p: 1,
  mb: 1,
  radius: 4,
  border: 1
}
