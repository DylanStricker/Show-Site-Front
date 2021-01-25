const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onShowAdd = function (event) {
  event.preventDefault()
  // console.log('ShA clicked')

  const form = event.target
  const data = getFormFields(form)

  api.showAdd(data)
    .then(ui.onShowAddSuccess)
    .catch(ui.onError)
}

const onShowAddDynamic = function (event) {
  event.preventDefault()
  // console.log('ShA clicked')
  // console.log(event.target.showId)
  // console.log(event.target)

  const revData = event.target.id
  const id = revData.substring(3, 27)
  // const form = event.target
  // const data = getFormFields(form)
  // // console.log(data)
  api.showAdd({ showId: id }) //
    .then(ui.onShowAddSuccess)
    .catch(ui.onError)
}
const onShowCreate = function (event) {
  event.preventDefault()
  // console.log('ShC clicked')

  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  api.showCreate(data)
    .then(ui.onShowCreateSuccess)
    .catch(ui.onError)
}

const onShowDestroy = function (event) {
  event.preventDefault()
  // console.log('ShD clicked')

  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  api.showDestroy(data)
    .then(ui.onShowDestroySuccess)
    .catch(ui.onError)
}

// const onShowGet = function (event) {
//   event.preventDefault()
//   // console.log('ShD clicked')
//
//   const form = event.target
//   const data = getFormFields(form)
//   console.log(data.show._id)
//   api.showGet(data)
//     .then(ui.onShowGetSuccess)
//     .catch(ui.onError)
// }

const onShowsGet = function (event) {
  event.preventDefault()
  // console.log('ShsG clicked')
  api.showsGet()
    .then(ui.onShowsGetSuccess)
    .catch(ui.onError)
}

const onShowRemove = function (event) {
  event.preventDefault()
  // console.log('ShR clicked')

  const form = event.target
  const data = getFormFields(form)

  api.showRemove(data)
    .then(ui.onShowRemoveSuccess)
    .catch(ui.onError)
}
const onShowUpdate = function (event) {
  event.preventDefault()
  // console.log('ShU clicked')

  const form = event.target
  const data = getFormFields(form)

  api.showUpdate(data)
    .then(ui.onShowUpdateSuccess)
    .catch(ui.onError)
}
module.exports = {
  onShowAdd,
  onShowAddDynamic,
  onShowCreate,
  onShowDestroy,
  // onShowGet,
  onShowsGet,
  onShowRemove,
  onShowUpdate
}
