const firebase = require('firebase/app')
require('firebase/auth')
const config = require('./config/env.config')

const provider = new firebase.auth.GithubAuthProvider()
const app = firebase.initializeApp(config.firebase)

exports.getUser = async () => {

  try {
    const result = await app.auth().signInWithPopup(provider)
    const token = result.credential.accessToken
      const user = result.user

      const finalData = { token, name: user.displayName, email: user.email, photo: user.photoURL }
      return finalData
    }
    catch(error) {
      /*var errorCode = error.code
      var errorMessage = error.message
      var email = error.email
      var credential = error.credential;*/
      console.error(error.message)
    }
}
