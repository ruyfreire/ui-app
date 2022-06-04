import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../src/theme'

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: theme.colors.background.section,
      },
      {
        name: 'light',
        value: theme.colors.white,
      },
    ],
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]
