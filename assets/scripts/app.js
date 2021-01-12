'use strict'

// use require with a reference to bundle the file and use it in this file
const aevents = require('./../auth/events')
const sevents = require('./../show/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth
  $('#sign-up').on('submit', aevents.onSignUp)
  $('#sign-in').on('submit', aevents.onSignIn)
  $('#pass-change').on('submit', aevents.onPChange)
  $('#sign-out').on('submit', aevents.onSignOut)
  // show
  $('#index-req').on('click', sevents.onShowsGet)
  $(document).on('submit', '.show-add', sevents.onShowAdd)
  $('#show-create').on('submit', sevents.onShowCreate)
  $('#show-destroy').on('submit', sevents.onShowDestroy)
  $(document).on('submit', '.show-remove', sevents.onShowRemove) // still need to implement this
  $('#show-update').on('submit', sevents.onShowUpdate)
  // style
  $('.authenticated').hide(0)
})
