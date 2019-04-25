import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class Header extends React.Component {
  render () {
    return (
      <header>
        <AppBar position='relative'>
          <ToolBar>
            <Typography variant='h4' color='inherit'>
              estante
            </Typography>
          </ToolBar>
        </AppBar>
      </header>
    )
  }
}

export default Header
