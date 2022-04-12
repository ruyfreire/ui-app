import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Toast, Button } from '../src/components'

export default {
  title: 'Componentes/Toast',
  component: Toast,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Mensagem de aviso'
    },
    variant: {
      defaultValue: 'success'
    },
    show: {
      type: 'boolean',
      defaultValue: false
    }
  }
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />

export const Default = Template.bind({})
Default.storyName = 'Padrão'
Default.args = {
  style: {
    position: 'fixed',
    top: '10px',
    left: '10px',
    transform: 'none'
  }
}
Default.parameters = {
  controls: {
    exclude: ['style']
  }
}

const TemplateOpen: ComponentStory<typeof Toast> = (args) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button onClick={() => setShow(!show)}>
        {show ? 'Fechar Toast' : 'Abrir Toast'}
      </Button>

      <Toast {...args} show={args.show || show} />
    </>
  )
}

export const Open = TemplateOpen.bind({})
Open.storyName = 'Abrindo'
Open.parameters = {
  controls: {
    exclude: ['style']
  }
}
