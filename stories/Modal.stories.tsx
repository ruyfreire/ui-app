import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Modal, Button } from '../src/components'

const Icon = (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="24" fill="#68FCD6" />
    <path
      d="M33.3574 15.9956C33.016 15.9956 32.66 16.1076 32.4 16.3636L20.7907 27.8223C20.448 28.1596 20.104 28.097 19.8347 27.6996L15.84 21.8063C15.432 21.2049 14.5787 21.0369 13.9667 21.4383C13.356 21.8396 13.1853 22.6783 13.5933 23.2796L17.5867 29.1729C18.7893 30.9449 21.132 31.1703 22.664 29.6636L34.3147 18.2463C34.8334 17.7343 34.8334 16.8756 34.3147 16.3636C34.0547 16.1076 33.6974 15.9956 33.3574 15.9956Z"
      fill="black"
      fillOpacity="0.5"
    />
  </svg>
)

const Image = (
  <svg
    width="100%"
    viewBox="0 0 216 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M101.331 47.9875C98.3858 47.9875 95.9978 50.3755 95.9978 53.3209V65.3209V66.6542C95.9978 69.5996 98.3858 71.9875 101.331 71.9875H114.664C117.61 71.9875 119.998 69.5996 119.998 66.6542V65.3209V53.3209C119.998 50.3755 117.61 47.9875 114.664 47.9875H101.331ZM101.331 50.6542H114.664C116.138 50.6542 117.331 51.8475 117.331 53.3209L117.336 61.5822C116.299 60.6195 115.242 60.0169 114.08 59.9875C114.039 59.9862 114.04 59.9875 113.998 59.9875C112.482 59.9875 110.796 61.1529 109.664 62.6129C109.375 61.9595 109.083 61.3142 108.747 60.6956C107.174 57.7902 105.455 55.9915 103.331 55.9875C101.526 55.9835 99.9765 57.4595 98.6538 59.4809L98.6645 53.3209C98.6645 51.8475 99.8578 50.6542 101.331 50.6542ZM113.331 53.3209C112.595 53.3209 111.998 53.9182 111.998 54.6542C111.998 55.3902 112.595 55.9875 113.331 55.9875C114.067 55.9875 114.664 55.3902 114.664 54.6542C114.664 53.9182 114.067 53.3209 113.331 53.3209ZM103.331 58.6542C104.107 58.6555 105.286 59.8635 106.414 61.9462C106.862 62.7702 107.263 63.6782 107.623 64.5715C107.839 65.1049 108.006 65.5129 108.08 65.7369C108.444 66.8262 109.922 66.9809 110.498 65.9875C110.555 65.8889 110.659 65.6995 110.831 65.4462C111.119 65.0195 111.447 64.5876 111.79 64.1956C112.646 63.2142 113.471 62.6542 113.998 62.6542C114.53 62.6675 115.351 63.2262 116.206 64.1956C116.552 64.5889 116.872 65.0195 117.164 65.4462C117.256 65.5795 117.27 65.6422 117.331 65.7369V66.6542C117.331 68.1276 116.138 69.3209 114.664 69.3209H101.331C99.8578 69.3209 98.6645 68.1276 98.6645 66.6542V65.5289C98.7485 65.2916 98.8605 65.0102 99.0391 64.5715C99.4031 63.6782 99.7978 62.7715 100.248 61.9462C101.386 59.8595 102.556 58.6529 103.331 58.6542Z"
      fill="white"
      fillOpacity="0.1"
    />
    <rect
      x="1"
      y="1"
      width="214"
      height="118"
      stroke="white"
      strokeOpacity="0.1"
      strokeWidth="2"
      strokeDasharray="8 8"
    />
  </svg>
)

export default {
  title: 'Componentes/Modal',
  component: Modal,
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
    buttonPrimary: {
      type: 'symbol'
    },
    buttonSecondary: {
      type: 'symbol'
    },
    icon: {
      type: 'symbol'
    },
    onClose: {
      type: 'function',
      defaultValue: null
    },
    overlayClose: {
      type: 'boolean',
      defaultValue: true
    },
    buttonClose: {
      type: 'boolean',
      defaultValue: false
    },
    open: {
      type: 'boolean',
      defaultValue: false
    },
    variant: {
      defaultValue: 'default'
    }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>

      <Modal {...args} open={open || args.open} onClose={() => setOpen(false)}>
        {args.children}
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Padrão'

export const WithImage = Template.bind({})
WithImage.storyName = 'Com imagem'
WithImage.args = {
  image: Image
}

export const WithIcon = Template.bind({})
WithIcon.storyName = 'Com ícone'
WithIcon.args = {
  icon: Icon
}

export const WithOneButton = Template.bind({})
WithOneButton.storyName = 'Com um botão'
WithOneButton.args = {
  buttonPrimary: {
    children: 'Botão principal'
  }
}

export const WithTwoButton = Template.bind({})
WithTwoButton.storyName = 'Com dois botões'
WithTwoButton.args = {
  buttonPrimary: {
    children: 'Principal'
  },
  buttonSecondary: {
    children: 'Secundário'
  }
}
