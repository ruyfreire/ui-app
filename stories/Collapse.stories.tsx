import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Collapse } from '../src/components'

export default {
  title: 'Componentes/Collapse',
  component: Collapse,
  argTypes: {
    children: {
      type: 'string',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lacinia urna, in mollis sapien vulputate id. Integer luctus sapien vel tincidunt pulvinar. Quisque commodo est eu enim imperdiet sodales. Nam id ligula quis ligula semper ultrices. Suspendisse potenti. Donec quis ligula ac enim pulvinar tempor in nec nisi. Nulla suscipit erat dolor, vitae rhoncus ex posuere et. Suspendisse venenatis malesuada nulla eu efficitur. Cras eleifend tincidunt purus. Etiam rutrum id velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    title: {
      type: 'string',
      defaultValue: 'Lorem ipsum'
    },
    open: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Collapse>

const Template: ComponentStory<typeof Collapse> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <Collapse
      {...args}
      open={args.open || open}
      toggleOpen={() => setOpen(!open)}
    />
  )
}

export const Default = Template.bind({})
Default.storyName = 'Padrão'
