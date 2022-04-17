let content

function $ajax(url) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.state === 200) {
      return Promise.resolve(xhr.responseText)
    } else {
      return Promise.reject('404')
    }
  }
  xhr.send(null)
}