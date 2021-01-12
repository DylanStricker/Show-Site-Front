'use strict'
const store = require('../scripts/store')

const onIUSSuccess = function (responseData) {
  console.log(responseData)
  const shows = responseData.shows
  console.log(shows)
  $('#show-request').text('Your shows are:')
  store.usershows = shows.map(show => {
    const box = `<form>Title: ${show.title}<BR> Director:${show.director}<BR> ${show.rating}/10<BR> ${show.description}<BR> ${show.releaseDate}<BR> <button type="submit" class="show-remover">Remove from my list</button></form>`
    console.log(box)
    $('#show-request').append(box)
    console.log(store.usershows)
  })
}

const onShowsGetSuccess = function (responseData) {
  console.log(responseData)
  console.log(store.user)
  // save show value
  const shows = responseData.shows
  console.log(shows)
  // set each show as it's own li element
  shows.map(show => {
    let box = `<form>Title: ${show.title}<BR> Director:${show.director}<BR> ${show.rating}/10<BR> ${show.description}<BR> ${show.releaseDate}`
    function presenceTest () {
      let i = 0
      let found = false
      const length = store.usershows.length
      if (store.usershows[0]) {
        for (; i > length; i++) {
          if (store.usershows[i]._id === show._id) {
            found = true
            return found
          }
        }
      }
      return found
    }
    if (presenceTest()) {
      console.log('Show found')
      box = box + '<BR> <button type="submit" class="show-remove">Remove from my list</button></form>'
    } else {
      console.log('Show Not Found')
      box = box + '<BR> <button type="submit" class="show-add">Add to my list</button></form>'
    }
    console.log(box)
    $('#all-shows').append(box)
  })
}

module.exports = {
  onShowsGetSuccess,
  onIUSSuccess
}
