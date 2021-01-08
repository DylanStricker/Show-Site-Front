'use strict'

// use require with a reference to bundle the file and use it in this file
const events = require('./../auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#pass-change').on('submit', events.onPChange)
  $('#sign-out').on('click', events.onSignOut)
})
