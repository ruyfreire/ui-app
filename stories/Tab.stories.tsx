import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tab } from '../src/components'

const Svg = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.4233 2.19752C11.4063 2.18552 10.4109 2.52153 9.70429 3.22853L2.76679 10.3215C2.46839 10.6265 2.38849 11.0655 2.57929 11.4475L3.48549 13.2595L3.45429 18.9785C3.45419 20.1095 4.36049 21.0095 5.48549 21.0095H9.67299C10.6703 21.0095 11.4853 20.1945 11.4853 19.1975V14.8845C11.4853 14.4005 11.8763 14.0095 12.3603 14.0095H12.6103C13.0943 14.0095 13.4853 14.4005 13.4853 14.8845V19.1975C13.4853 20.1945 14.3003 21.0095 15.2983 21.0095H19.4853C20.6103 21.0095 21.5163 20.1035 21.5163 18.9785L21.4853 13.2595L22.3913 11.4475C22.5843 11.0625 22.5083 10.5955 22.2043 10.2905C21.9443 10.0305 15.8293 3.91554 15.2043 3.29054C14.4793 2.56554 13.4393 2.20852 12.4233 2.19752ZM12.4233 4.19752C12.9263 4.20752 13.4283 4.39053 13.7663 4.72853C14.3473 5.30853 19.3023 10.2635 20.2663 11.2285L19.5793 12.5715C19.5093 12.7125 19.4843 12.8525 19.4853 13.0095L19.5163 18.9785C19.5163 18.9925 19.5063 19.0095 19.4853 19.0095H15.4853V14.8845C15.4853 13.2955 14.1993 12.0095 12.6103 12.0095H12.3603C10.7713 12.0095 9.48549 13.2955 9.48549 14.8845V19.0095H5.48549C5.46509 19.0095 5.45429 18.9985 5.45429 18.9785L5.48549 13.0095C5.48649 12.8525 5.46209 12.7125 5.39179 12.5715L4.70429 11.1975L11.1103 4.63453C11.4193 4.32553 11.9193 4.18652 12.4233 4.19752Z"
      fill="currentColor"
    />
  </svg>
)

export default {
  title: 'Componentes/Tab',
  component: Tab,
  argTypes: {
    items: {
      defaultValue: [
        {
          index: 0,
          label: 'Item 1'
        },
        {
          index: 1,
          label: 'Item 2'
        },
        {
          index: 2,
          label: 'Item 3'
        },
        {
          index: 3,
          label: 'Item 4'
        }
      ],
      control: {
        type: 'object'
      },
      table: {
        type: {
          summary: 'Item',
          detail: '{ index: number, label: string, icon: ReactNode(24x24) }'
        }
      }
    },
    active: {
      type: 'number',
      defaultValue: 0,
      control: false
    }
  }
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = (args) => {
  const [active, setActive] = useState<number>(0)

  return <Tab {...args} active={active} onChange={setActive} />
}

export const Default = Template.bind({})
Default.storyName = 'Padrão'

export const WithIcon = Template.bind({})
WithIcon.storyName = 'Com ícone'
WithIcon.args = {
  items: [
    {
      index: 0,
      label: 'Item 1',
      icon: Svg
    },
    {
      index: 1,
      label: 'Item 2',
      icon: Svg
    },
    {
      index: 2,
      label: 'Item 3',
      icon: Svg
    },
    {
      index: 3,
      label: 'Item 4',
      icon: Svg
    }
  ]
}
