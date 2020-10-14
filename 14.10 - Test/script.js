var moveback = false

function url() { 
  if(moveback == true ) {
    document.getElementById("name").value = localStorage.getItem('savename')
    document.getElementById("lastname").value = localStorage.getItem('savelastname')
  }
  else{
    let url = window.location.href
    let params = (new URL(url).searchParams)

    document.getElementById("name").value = params.get('name')
    document.getElementById("lastname").value = params.get('lastname')

    localStorage.setItem('savename', document.getElementById("name").value)
    localStorage.setItem('savelastname', document.getElementById("lastname").value)

    console.log(localStorage.getItem('savename'))
    console.log(localStorage.getItem('savelastname'))
  }
  moveback = false
}

function startset() {
  window.localStorage.setItem('savename', document.getElementById("name").value)
  window.localStorage.setItem('savelastname', document.getElementById("lastname").value)

  console.log(localStorage.getItem('savename'))
  console.log(localStorage.getItem('savelastname'))
}

function selection() {
  console.log(localStorage.getItem('savename'))
  console.log(localtorage.getItem('savelastname'))
}

function gesellschaftlich() {
  if(document.getElementById("pfach1.3").checked == true) {
    document.getElementById("pfach1.3").checked = false
  }
  else{
    document.getElementById("pfach1.3").checked = true
  }
  if(document.getElementById("pfach3.4").checked == true) {
    document.getElementById("pfach3.4").checked = false
  }
  else{
  document.getElementById("pfach3.4").checked = true
  }
}

function natur() {
  document.getElementById("name").value = localStorage.getItem('savename')
  document.getElementById("lastname").value = localStorage.getItem('savelastname')
  console.log("Name: " + localStorage.getItem('savename'))
  console.log("Nachname: " + localStorage.getItem('savelastname'))
  moveback = true
}

function muku() {

}

function sprach() {

}

function clear() {
  localStorage.removeItem('savename')
  localStorage.removeItem('savelastname')
}