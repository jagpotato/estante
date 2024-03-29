import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import SignIn from './SignIn'

const styles = {
  grow: {
    flexGrow: 1,
  }
}

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      thumbnailURL: '',
      anchorEl: null
    }
  }

  updateAuthState (thumbnailURL, isSignIn) {
    this.updateThumbnailURL(thumbnailURL)
    this.props.updateSignInState(isSignIn)
  }

  updateThumbnailURL (thumbnailURL) {
    this.setState({thumbnailURL})
  }

  handleClickUserIcon (event) {
    this.setState({anchorEl: event.currentTarget})
  }

  handleCloseUserMenu () {
    this.setState({anchorEl: null})
  }

  signOut () {
    this.props.firebase.signOut()
      .then(() => {
        this.updateAuthState('', false)
        this.handleCloseUserMenu()
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <header>
        <AppBar position='relative' color='primary'>
          <ToolBar>
            <Typography variant='h4' color='inherit' style={styles.grow}>
              estante
            </Typography>
            {/* ログイン周り */}
            {/* {this.props.isSignIn
              ?
              <IconButton
                aria-owns={this.state.anchorEl ? 'user-menu' : undefined}
                aria-haspopup='true'
                onClick={(event) => this.handleClickUserIcon(event)}
              >
                <Avatar src={this.state.thumbnailURL} />
              </IconButton>
              :
              <SignIn firebase={this.props.firebase} updateAuthState={(thumbnailURL, isSignIn) => this.updateAuthState(thumbnailURL, isSignIn)} />
            }
            <Menu
              id='user-menu'
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={() => this.handleCloseUserMenu()}
            >
              <MenuItem onClick={() => this.signOut()}>
                LOGOUT
              </MenuItem>
            </Menu> */}
          </ToolBar>
        </AppBar>
      </header>
    )
  }
}

export default Header
