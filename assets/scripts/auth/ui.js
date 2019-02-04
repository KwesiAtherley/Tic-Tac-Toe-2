'use strict'

const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You signed up successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = function (signUpFailureResponse) {
  $('#message').html('Something went wrong, please try again')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const signInSuccess = function (signInResponse) {
  // console.log(signInResponse.user)
  // console.log('store object before adding user', store)
  store.user = signInResponse.user
  // console.log('store object after adding user', store)
  $('#message').html('You signed in successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.signup-btn').hide()
  $('.signin-btn').hide()
  $('#game-box').removeClass('hidden')
  $('.fixUp').removeClass('hidden')
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').html('You changed your password successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const signOutSuccess = function () {
  $('#message').html('You signed out successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password').addClass('hidden')
  $('#change-password').trigger('reset')
  $('#sign-out').addClass('hidden')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.signup-btn').show()
  $('.signin-btn').show()
  $('.start-log').hide()
  $('#player-turn').hide()
  $('#game-message').hide()
  $('#game-box').addClass('hidden')
  $('.box').empty()
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  failure,
  changePasswordSuccess,
  signOutSuccess
}
