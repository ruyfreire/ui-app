import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card, Button } from '../src/components'

export default {
  title: 'Componentes/Card',
  component: Card,
  argTypes: {
    title: {
      type: 'string',
      defaultValue: 'Lorem'
    },
    children: {
      type: 'string',
      defaultValue:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat et assumenda reiciendis consequatur eaque quasi dolor voluptas.'
    },
    image: {
      type: 'symbol'
    },
    button: {
      type: 'symbol',
      defaultValue: <Button>Botão</Button>
    },
    fullWidth: {
      type: 'boolean',
      defaultValue: false
    },
    imageBg: {
      defaultValue: '#161547',
      control: {
        type: 'color'
      }
    },
    imageDirection: {
      defaultValue: 'column'
    }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ display: 'flex', alignItems: 'start', gap: '8px' }}>
    <Card {...args} button={null}>
      {args.children}
    </Card>

    <Card {...args}>{args.children}</Card>
  </div>
)

export const Default = Template.bind({})
Default.storyName = 'Padrão'
Default.argTypes = {
  imageDirection: {
    control: false
  },
  imageBg: {
    control: false
  }
}

export const WithImage = Template.bind({})
WithImage.storyName = 'Com imagem'
WithImage.args = {
  image: <img src="/images/computer.png" />
}

export const WithoutContent = Template.bind({})
WithoutContent.storyName = 'Apenas título'
WithoutContent.args = {
  children: '',
  image: <img src="/images/computer.png" />
}
WithoutContent.argTypes = {
  imageDirection: {
    control: false
  },
  children: {
    control: false
  }
}
