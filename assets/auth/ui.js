'use strict'
const store = require('./../store')

const msgClearer = function (field) {
  const statusmsgclear = () => $(field).text('')
  setTimeout(statusmsgclear, 20000)
}

const onSignInSuccess = function (responseData) {
  // console.log('user data', responseData)
  // console.log('success!')

  store.user = responseData.user
  $('#current-status').text('Successfully signed in!')
  msgClearer('#current-status')
  // hide unauthenticated
  $('.unauthenticated').hide()
  // show authenticated
  $('.authenticated').show()
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  // console.log('success!')
  $('#current-status').text('Signed Out!')
  msgClearer('#current-status')

  $('.authenticated').hide()
  $('.unauthenticated').show()

  // VERY IMPORTANT
  store.user = null
}

const onSignUpSuccess = function (responseData) {
  // console.log('user data', responseData)
  // console.log('success!')
  $('#current-status').text('Successfully signed up!')
  msgClearer('#current-status')
  $('form').trigger('reset')
}
const onPChangeSuccess = function () {
  // console.log('success!')
  $('#current-status').text('Password Changed!')
  msgClearer('#current-status')
  $('form').trigger('reset')
}
module.exports = {
  onPChangeSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onSignUpSuccess
}
