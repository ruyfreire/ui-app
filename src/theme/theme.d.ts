import 'styled-components'
import { theme } from '.'

type Theme = typeof theme

declare module 'styled-components' {
  /**
   * Interface do tema padrão do projeto
   */
  export interface DefaultTheme extends Theme {}
}
