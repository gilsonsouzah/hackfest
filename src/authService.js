const firebase = require('firebase/app')
require('firebase/auth')
const config = require('./config/env.config')

const provider = new firebase.auth.GithubAuthProvider()

exports.getUser = () => {
  firebase
    .initializeApp(config.firebase)
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      const token = result.credential.accessToken
      const user = result.user
      const finalData = { token, name: user.displayName, email: user.email }
      //console.log(finalData)
      return finalData
    })
    .catch(function(error) {
      /*var errorCode = error.code
      var errorMessage = error.message
      var email = error.email
      var credential = error.credential;*/
      console.error(error.message)
    })
}
