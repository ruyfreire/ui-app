import React, { useEffect, useState, useRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Countdown } from '../src/components'

export default {
  title: 'Componentes/Countdown',
  component: Countdown,
  argTypes: {
    hour: {
      type: 'number',
      defaultValue: 0,
      control: {
        type: 'number',
        min: 0,
        max: 23
      }
    },
    minute: {
      type: 'number',
      defaultValue: 0,
      control: {
        type: 'number',
        min: 0,
        max: 59
      }
    },
    second: {
      type: 'number',
      defaultValue: 0,
      control: {
        type: 'number',
        min: 0,
        max: 59
      }
    },
    title: {
      type: 'string',
      defaultValue: 'Contador'
    },
    subtitle: {
      type: 'string',
      defaultValue: '10 de Abril de 2022'
    },
    size: {
      defaultValue: 'medium'
    }
  }
} as ComponentMeta<typeof Countdown>

export const Default: ComponentStory<typeof Countdown> = (args) => (
  <Countdown {...args} />
)
Default.storyName = 'Padrão'

export const Contando: ComponentStory<typeof Countdown> = (args) => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)
  /* global NodeJS */
  const timeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    timeout.current = setTimeout(() => {
      if (second === 50) {
        if (minute === 50) {
          if (hour === 23) {
            setHour(0)
            setMinute(0)
            setSecond(0)
          } else {
            setHour(hour + 1)
            setMinute(0)
            setSecond(0)
          }
        } else {
          setMinute(minute + 10)
          setSecond(0)
        }
      } else {
        setSecond(second + 10)
      }
    }, 100)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [second])

  return <Countdown {...args} hour={hour} minute={minute} second={second} />
}
