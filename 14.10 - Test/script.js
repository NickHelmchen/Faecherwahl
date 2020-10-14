var startname
var startlastname


function url() { 
  let url = window.location.href
  let params = (new URL(url).searchParams)

  startname = params.get('name')
  startlastname = params.get('lastname')

  document.getElementById("name").value = startname
  document.getElementById("lastname").value = startlastname

  if(params.get("Profiel") == "MaNa") {
    
  }
}

function startset() {
  window.sessionStorage.setItem(name, startname)
  window.sessionStorage.setItem(lastname, startlastname)
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
  var Name = sessionStorage.getItem(name)
  var Lastname = sessionStorage.getItem(lastname)

  document.getElementById("name").value = Name
  document.getElementById("lastname").value = Lastname
}

function muku() {

}

function sprach() {

}