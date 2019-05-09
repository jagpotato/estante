import {createMuiTheme} from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8b6b61',
      main: '#5d4037',
      dark: '#321911'
    },
    secondary: {
      light: '#80e27e',
      main: '#4caf50',
      dark: '#087f23',
      contrastText: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true
  }
})
