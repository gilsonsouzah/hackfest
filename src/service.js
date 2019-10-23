import firebase from 'firebase/app'
import axios from 'axios'
import 'firebase/auth'

const config = require('./config/env.config')
const app = firebase.initializeApp(config.firebase)
const provider = new firebase.auth.GithubAuthProvider()

const getUser = async () => {
  try {
    console.log('-- initializing login --')
    const result = await app.auth().signInWithPopup(provider)
    const token = result.credential.accessToken
    const user = result.user
    console.log('-- user response --', user)

    const finalData = {
      token,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    }
    return finalData
  } catch (error) {
    /*var errorCode = error.code
      var errorMessage = error.message
      var email = error.email
      var credential = error.credential;*/
    console.error(error.message)
  }
}

const sendUser = async user => {
  const result = await axios.post(
    'https://us-central1-hackfest2019-21c8c.cloudfunctions.net/api/collaborator',
    user
  )
  console.log('-- result -- ', result)
  return result
}

export { getUser, sendUser }
