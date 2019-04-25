import firebase from 'firebase/app'
import 'firebase/firestore'
import {config} from './config'

const firebaseApp = firebase.initializeApp(config)

export const firestore = firebaseApp.firestore()
