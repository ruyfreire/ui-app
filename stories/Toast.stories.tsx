import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

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
  const [, updateArgs] = useArgs()

  return (
    <>
      <Button onClick={() => updateArgs({ show: !args.show })}>
        {args.show ? 'Fechar Toast' : 'Abrir Toast'}
      </Button>

      <Toast {...args} />
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
