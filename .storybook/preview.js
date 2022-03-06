import React from 'react'
import { ThemeProviderUiApp } from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered'
}

export const decorators = [
  (Story) => (
    <ThemeProviderUiApp>
      <Story />
    </ThemeProviderUiApp>
  ),
]
