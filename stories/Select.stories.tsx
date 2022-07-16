import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from '../src/components'
import { SelectProps } from '../src/components/Select'

export default {
  title: 'Componentes/Select',
  component: Select,
  argTypes: {
    value: {
      type: 'string',
      defaultValue: '',
      control: false,
      table: {
        type: {
          detail:
            'Option: string | number | object \nOption[]: Array<string | number | object>'
        }
      }
    },
    placeholder: {
      type: 'string'
    },
    emptyOptionsText: {
      type: 'string'
    },
    optionSelected: {
      type: 'boolean',
      defaultValue: false
    },
    multi: {
      type: 'boolean',
      defaultValue: false
    },
    onChange: {
      table: {
        type: {
          detail:
            'Option: string | number | object \nOption[]: Array<string | number | object>'
        }
      }
    },
    options: {
      defaultValue: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
      table: {
        type: {
          detail: 'Option[]: Array<string | number | object>'
        }
      }
    },
    getOptionLabel: {
      table: {
        type: {
          detail: 'Option: string | number | object'
        }
      }
    }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<SelectProps['value']>('')

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Select {...args} value={value} onChange={setValue} />

        <Select {...args} options={[]} />
      </div>
    </>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Padrão'

const TemplateMulti: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<SelectProps['value']>([])

  return <Select {...args} value={value} onChange={setValue} />
}

export const Multi = TemplateMulti.bind({})
Multi.storyName = 'Multi'
Multi.args = {
  multi: true
}
Multi.parameters = {
  controls: {
    exclude: ['multi']
  }
}
