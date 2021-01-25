'use strict'
const store = require('../scripts/store')
const aui = require('../auth/ui')
const api = require('./api')

// const onIUSSuccess = function (responseData) {
//   // console.log(responseData)
//   const shows = responseData.shows
//   // console.log(shows)
//   $('#show-request').text('Your shows are:')
//
//   store.usershows = shows.map(show => {
//     const box = `
//     <form>Title: ${show.title}<BR>
//     Director:${show.director}<BR>
//     ${show.rating}/10<BR> ${show.description}<BR>
//     ${show.releaseDate}<BR>
//     <button type="submit" class="show-remover">Remove from my list</button></form>`
//
//     // console.log(box)
//     $('#show-request').append(box)
//     // console.log(store.usershows)
//   })
// }

const onShowAddSuccess = function () {
  $('form').trigger('reset')
  api.indexUserShows()
  // .then(onIUSSuccess)
    .then($('#current-status').text('Show has been Added'))
    .catch(aui.onError)
}

const onShowCreateSuccess = function () {
  $('form').trigger('reset')
  api.showsGet()
    .then(onShowsGetSuccess)
    .then($('#current-status').text('Show has been Created'))
    .catch(aui.onError)
}
const onShowDestroySuccess = function () {
  $('form').trigger('reset')
  api.showsGet()
    .then(onShowsGetSuccess)
    .then($('#current-status').text('Show has been destroyed'))
    .catch(aui.onError)
}
const onShowsGetSuccess = function (responseData) {
  // let index = 0
  $('#all-shows').html('<ol id="all-shows">The Show(s)</ol>')
  // console.log(responseData)
  // console.log(store.user)
  // save show value
  const shows = responseData.shows
  // console.log(shows)
  // set each show as it's own li element
  shows.reverse()
  shows.map(show => {
    const box = `
    <li>Title: ${show.title}<BR>
    Director:${show.director}<BR>
    ${show.rating}/10<BR>
    ${show.desc}<BR>
    ${show.releaseDate}<BR>
    ${show._id}</li>`

    // function presenceTest () {
    //   let i = 0
    //   let found = false
    //   const length = store.usershows.length
    //   if (store.usershows[0]) {
    //     for (; i > length; i++) {
    //       if (store.usershows[i]._id === show._id) {
    //         found = true
    //         return found
    //       }
    //     }
    //   }
    //   return found
    // }
    // if (presenceTest()) {
    //   // console.log('Show in List')
    //   box = `<form class=li-${index}>` + box + `<mark class=id-${index}>${show._id}</mark><BR> <button name="[${show._id}]" type="submit" id="id=${show._id}" class="show-remove ${index}">Remove from my list</button></form>`
    // } else {
    //   // console.log('Show Not in List')
    //   box = `<form class=li-${index}>` + box + `<mark class=id-${index}>${show._id}</mark><BR> <button name="showId[${show._id}]" type="submit" id="id=${show._id}" class="show-add ${index}">Add to my list</button></form>`
    // }
    // console.log(box)
    $('#all-shows').append(box)
  //  index++
  })
} // can you minimize the DOM interactions?

const onShowUpdateSuccess = function (data) {
  $('form').trigger('reset')
  $('#current-status').text('Show has been updated')
  api.showsGet()
    .then(onShowsGetSuccess)
    .catch(aui.onError)
}
// const onShowGetSuccess = function (data) {
//   $('form').trigger('reset')
//   $('#current-status').text("Here's your show!")
//   api.showsGet()
//     .then(onShowsGetSuccess)
//     .catch(aui.onError)
// }
module.exports = {
  onShowAddSuccess,
  onShowCreateSuccess,
  onShowDestroySuccess,
  onShowUpdateSuccess,
  // onShowGetSuccess,
  onShowsGetSuccess
  // onIUSSuccess
}
