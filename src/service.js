import firebase from 'firebase/app'
import axios from 'axios'
import 'firebase/auth'

const config = require('./config/env.config')
const app = firebase.initializeApp(config.firebase)
const provider = new firebase.auth.GithubAuthProvider()

const getUser = async () => {
  try {
    const result = await app.auth().signInWithPopup(provider)
    const token = result.credential.accessToken
    const user = result.user
    const finalData = {
      token,
      name: user.displayName,
      email: (user.providerData.find(el => el.email) || {}).email,
      photoUrl: user.photoURL
    }
    return finalData
  } catch (error) {
    console.error(error.message)
  }
}

const sendUser = async user => {
  try {
    const token = JSON.parse(localStorage.getItem('user')).token
    const result = await axios.post(
      'https://us-central1-hackfest2019-21c8c.cloudfunctions.net/api/collaborator',
      user,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return result
  } catch (err) {
    console.error(err)
  }
}

const findCEPAddress = async cep => {
  try {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

    return result
  } catch (err) {
    console.error(err)
  }
}

export { getUser, sendUser, findCEPAddress }
