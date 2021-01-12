'use strict'
const store = require('../scripts/store')
const config = require('../scripts/config')

const indexUserShows = function () {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user._id + '/shows',
    method: 'GET'
  })
}

const showAdd = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user._id + '/shows',
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showCreate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shows',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showDestroy = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shows/:id',
    method: 'DELETE',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showsGet = function (data) {
  return $.ajax({
    url: config.apiUrl + '/shows',
    method: 'GET',
    data
  })
}

const showRemove = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user._id + '/shows',
    method: 'DELETE',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showUpdate = function (data) {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user._id + '/shows',
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  indexUserShows,
  showAdd,
  showCreate,
  showDestroy,
  showsGet,
  showRemove,
  showUpdate
}
