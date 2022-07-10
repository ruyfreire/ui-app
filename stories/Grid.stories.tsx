import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories
} from '@storybook/addon-docs'

import { Grid, Input, Box } from '../src/components'
import { theme } from '../src/theme'

export default {
  title: 'Componentes/Grid',
  component: Grid,
  argTypes: {
    gap: { defaultValue: 15, control: { type: 'number', min: 0 } },
    xs: { control: { type: 'range', min: 0, max: 12 } },
    sm: { control: { type: 'range', min: 0, max: 12 } },
    md: { control: { type: 'range', min: 0, max: 12 } },
    lg: { control: { type: 'range', min: 0, max: 12 } },
    xl: { control: { type: 'range', min: 0, max: 12 } },
    xxl: { control: { type: 'range', min: 0, max: 12 } }
  },
  parameters: {
    controls: {
      include: [
        'flexDirection',
        'alignItems',
        'justifyContent',
        'flexWrap',
        'gap',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl'
      ]
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories />
        </>
      )
    }
  }
} as ComponentMeta<typeof Grid>

const TemplateDefault: ComponentStory<typeof Grid> = (args) => (
  <Box bgColor={theme.colors.white3}>
    <Grid {...args} container style={{ height: '200px' }}>
      <Grid {...args} item>
        <Box
          p={1}
          bgColor={theme.colors.secondary.base}
          style={{ height: '100%' }}
        >
          1
        </Box>
      </Grid>

      <Grid {...args} item xs={1}>
        <Box
          p={1}
          bgColor={theme.colors.secondary.base}
          style={{ height: '100%' }}
        >
          2
        </Box>
      </Grid>

      <Grid {...args} item xs={1}>
        <Box
          p={1}
          bgColor={theme.colors.secondary.base}
          style={{ height: '100%' }}
        >
          3
        </Box>
      </Grid>
    </Grid>
  </Box>
)

export const Default = TemplateDefault.bind({})
Default.storyName = 'Padrão'

const TemplateForm: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args} container>
    <Grid {...args} item>
      <Input label="name" fullWidth />
    </Grid>

    <Grid {...args} item xs={2}>
      <Input label="sobrenome" fullWidth />
    </Grid>

    <Grid {...args} item xs={2}>
      <Input label="idade" fullWidth />
    </Grid>
  </Grid>
)

export const Form = TemplateForm.bind({})
Form.storyName = 'Formulário'
