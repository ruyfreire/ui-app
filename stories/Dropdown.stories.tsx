import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Dropdown } from '../src/components'

export default {
  title: 'Componentes/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      defaultValue: [
        { label: 'Opção 1', value: 'Opção 1' },
        { label: 'Opção 2', value: 'Opção 2' },
        { label: 'Opção 3', value: 'Opção 3' },
        { label: 'Opção 4', value: 'Opção 4' }
      ]
    },
    value: {
      type: 'string',
      defaultValue: '',
      control: false
    },
    placeholder: {
      type: 'string'
    },
    emptyOptionsText: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [value, setValue] = useState<string | number>('')

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Dropdown
          {...args}
          value={value}
          onChange={(opt) => setValue(opt.value)}
        />

        <Dropdown {...args} options={[]} />
      </div>
    </>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Padrão'
