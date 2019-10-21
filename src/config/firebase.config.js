import * as firebase from 'firebase/app'
import 'firebase/database'

import { env } from './env.config'

const firebaseConfig = {
  apiKey: env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  databaseURL: env.firebase.databaseURL,
  projectId: env.firebase.projectId,
  storageBucket: env.firebase.storageBucket,
  messagingSenderId: env.firebase.messagingSenderId
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
