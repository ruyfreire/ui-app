import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio } from '../src/components'

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11.9233 2.19758C10.9063 2.18558 9.9109 2.52158 9.2043 3.22858L2.2668 10.3216C1.9684 10.6266 1.8885 11.0656 2.0793 11.4476L2.9855 13.2596L2.9543 18.9786C2.9542 20.1096 3.8605 21.0096 4.9855 21.0096H9.173C10.1703 21.0096 10.9853 20.1946 10.9853 19.1976V14.8846C10.9853 14.4006 11.3763 14.0096 11.8603 14.0096H12.1103C12.5943 14.0096 12.9853 14.4006 12.9853 14.8846V19.1976C12.9853 20.1946 13.8003 21.0096 14.7983 21.0096H18.9853C20.1103 21.0096 21.0163 20.1036 21.0163 18.9786L20.9853 13.2596L21.8913 11.4476C22.0843 11.0626 22.0083 10.5956 21.7043 10.2906C21.4443 10.0306 15.3293 3.91559 14.7043 3.29059C13.9793 2.56559 12.9393 2.20858 11.9233 2.19758ZM11.9233 4.19758C12.4263 4.20758 12.9283 4.39058 13.2663 4.72858C13.8473 5.30858 18.8023 10.2636 19.7663 11.2286L19.0793 12.5716C19.0093 12.7126 18.9843 12.8526 18.9853 13.0096L19.0163 18.9786C19.0163 18.9926 19.0063 19.0096 18.9853 19.0096H14.9853V14.8846C14.9853 13.2956 13.6993 12.0096 12.1103 12.0096H11.8603C10.2713 12.0096 8.9855 13.2956 8.9855 14.8846V19.0096H4.9855C4.9651 19.0096 4.9543 18.9986 4.9543 18.9786L4.9855 13.0096C4.9865 12.8526 4.9621 12.7126 4.8918 12.5716L4.2043 11.1976L10.6103 4.63459C10.9193 4.32559 11.4193 4.18658 11.9233 4.19758Z"
      fill="currentColor"
    />
  </svg>
)

export default {
  title: 'Componentes/Radio',
  component: Radio,
  argTypes: {
    label: {
      type: 'string',
      defaultValue: 'Label'
    },
    error: {
      type: 'boolean',
      defaultValue: false
    },
    checked: {
      type: 'boolean',
      defaultValue: false
    },
    disabled: {
      type: 'boolean',
      defaultValue: false
    },
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => {
  const [checked, setChecked] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Radio
        {...args}
        id="sim"
        value="sim"
        checked={args.checked || checked === 'sim'}
        onChange={(e) => {
          setChecked(e.target.value)
        }}
      />

      <Radio
        {...args}
        id="nao"
        value="nao"
        checked={args.checked || checked === 'nao'}
        onChange={(e) => {
          setChecked(e.target.value)
        }}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Padrão'

export const Icon = Template.bind({})
Icon.storyName = 'Com ícone'
Icon.args = {
  icon: Svg
}
