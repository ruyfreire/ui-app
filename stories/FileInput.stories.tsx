import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { FileInput } from '../src/components'

export default {
  title: 'Componentes/FileInput',
  component: FileInput,
  argTypes: {
    description: {
      type: 'string',
      defaultValue: 'Upload de arquivos'
    },
    sub: {
      type: 'string',
      defaultValue: 'Clique ou arraste um arquivo para cá.'
    }
  }
} as ComponentMeta<typeof FileInput>

const Template: ComponentStory<typeof FileInput> = (args) => (
  <FileInput {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'Padrão'
