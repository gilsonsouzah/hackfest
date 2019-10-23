const functions = require('firebase-functions')

const admin = require('firebase-admin')

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.post('/collaborator', async (req, res) => {
  const original = req.body
  const snapshot = await admin
    .database()
    .ref('/collaborator')
    .push({ original: original })
  res.redirect(303, snapshot.ref.toString())
})

admin.initializeApp()

exports.api = functions.https.onRequest(app)
