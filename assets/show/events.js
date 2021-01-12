const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../scripts/store')

const onShowAdd = function (event) {
  event.preventDefault()
  console.log('ShA clicked')
  console.log(event.target)

//  api.showAdd()
//    .then(ui.onShowAddSuccess)
  //  .catch(ui.onError)
}
const onShowCreate = function (event) {
  event.preventDefault()
  console.log('ShC clicked')

  const form = event.target
  const data = getFormFields(form)

  api.showCreate(data)
    .then(ui.onShowAddSuccess)
    .catch(ui.onError)
}

const onShowDestroy = function (event) {
  event.preventDefault()
  console.log('ShD clicked')

  const form = event.target
  const data = getFormFields(form)

  api.ShowDestroy(data)
    .then(ui.onShowDestroySuccess)
    .catch(ui.onError)
}

const onShowsGet = function (event) {
  event.preventDefault()
  console.log('ShG clicked')
  api.showsGet()
    .then(ui.onShowsGetSuccess)
    .catch(ui.onError)
}

const onShowRemove = function (event) {
  event.preventDefault()
  console.log('ShR clicked')

  const form = event.target
  const data = getFormFields(form)

  api.showRemove(data)
    .then(ui.onShowUpdateSuccess)
    .catch(ui.onError)
}
const onShowUpdate = function (event) {
  event.preventDefault()
  console.log('ShU clicked')

  const form = event.target
  const data = getFormFields(form)

  api.showUpdate(data)
    .then(ui.onShowUpdateSuccess)
    .catch(ui.onError)
}
module.exports = {
  onShowAdd,
  onShowCreate,
  onShowDestroy,
  onShowsGet,
  onShowRemove,
  onShowUpdate
}
