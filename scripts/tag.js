function queryString () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var i = 0,
    queryObj = {},
    pair
  var queryStr = window.location.search.substring(1)
  var queryArr = queryStr.split('&')
  for (i = 0; i < queryArr.length; i++) {
    pair = queryArr[i].split('=')
    // If first entry with this name
    if (typeof queryObj[pair[0]] === 'undefined') {
      queryObj[pair[0]] = pair[1]
      // If second entry with this name
    } else if (typeof queryObj[pair[0]] === 'string') {
      queryObj[pair[0]] = [queryObj[pair[0]], pair[1]]
      // If third or later entry with this name
    } else {
      queryObj[pair[0]].push(pair[1])
    }
  }
  return queryObj
}

// 绑定点击dom

var filterPostByTag = function (tag) {
  var allPostItem = document.getElementsByClassName('post-item')
  Array.prototype.forEach.call(allPostItem, function (postItem) {
    var postTags = postItem.getAttribute('data-tags')
    var tagArray = postTags.split('%+%')
    // console.log(tagArray)
    // console.log(tag)
    if (tagArray.indexOf(tag) < 0) {
      console.log('hidd')
      postItem.style.display = 'none'
    } else {
      console.log('show')
      postItem.style.display = 'block'
    }
  })
}

var onClickTag = function (e) {
  var currTag
  if (['tag'].indexOf(e.target.className) >= 0) {
    currTag = e.target.getAttribute('data-tag')
    console.log(currTag)
    window.history.replaceState(null, '', window.location.href.split('?')[0] + '?tag=' + currTag)
    filterPostByTag(currTag)
  }
}

var tags = document.getElementsByClassName('tags')[0]
tags.addEventListener('click', onClickTag)

var query = queryString()
var tag
query.tag === undefined || (tag = query.tag)
filterPostByTag(tag)
