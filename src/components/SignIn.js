import React from 'react'

import Button from '@material-ui/core/Button'

class SignIn extends React.Component {
  signIn () {
    this.props.firebase.signIn()
      .then(user => {
        if (user) this.props.updateAuthState(user.photoURL, true)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <div>
        <Button onClick={() => this.signIn()} color='inherit'>Login</Button>
      </div>
    )
  }
}

export default SignIn
