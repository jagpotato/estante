import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {config} from './config'

app.initializeApp(config)
const firestore = app.firestore()
const provider = new app.auth.GoogleAuthProvider()

class Firebase {
  constructor () {
    this.firestore = firestore
  }

  async signIn () {
    try {
      const result = await app.auth().signInWithPopup(provider)
      return result.user
    } catch (error) {
      console.error(error)
    }
  }

  async signOut () {
    try {
      await app.auth().signOut()
    } catch (error) {
      console.error(error)
    }
  }

  getUserName () {
    const user = app.auth().currentUser
    return user ? user.displayName : 'null'
  }
}

export default Firebase
