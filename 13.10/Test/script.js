function url() { 
  let url = window.location.href
  let params = (new URL(url).searchParams)

  document.getElementById("name").value = params.get('name')
  document.getElementById("lastname").value = params.get('lastname')

  if(params.get("Profiel") == "MaNa") {
    
  }
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

}

function muku() {

}

function sprach() {

}