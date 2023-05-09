import { defaultTheme } from './styles/themes/default'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyles />
    </ThemeProvider>
  )
}
