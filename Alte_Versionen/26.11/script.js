var moveback = false
var restartmove = true

function url() { 
  if(moveback == true ) {
    document.getElementById("name").value = sessionStorage.getItem('savename')
    document.getElementById("lastname").value = sessionStorage.getItem('savelastname')
    moveback = false
    restartmove = true
  }
  else{
    let url = window.location.href
    let params = (new URL(url).searchParams)

    document.getElementById("name").value = params.get('name')
    document.getElementById("lastname").value = params.get('lastname')

    params.set('hallo', 'byby')

    sessionStorage.setItem('savename', document.getElementById("name").value)
    sessionStorage.setItem('savelastname', document.getElementById("lastname").value)

    console.log("Name: " + sessionStorage.getItem('savename'))
    console.log("Nachname: " + sessionStorage.getItem('savelastname'))
    restartmove = false
  }
}

function startset() {
  window.sessionStorage.setItem('savename', document.getElementById("name").value)
  window.sessionStorage.setItem('savelastname', document.getElementById("lastname").value)

  console.log(sessionStorage.getItem('savename'))
  console.log(sessionStorage.getItem('savelastname'))
}

function selection() {
  console.log(sessionStorage.getItem('savename'))
  console.log(sessiontorage.getItem('savelastname'))
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
  document.getElementById("name").value = sessionStorage.getItem('savename')
  document.getElementById("lastname").value = sessionStorage.getItem('savelastname')
  console.log("Name: " + sessionStorage.getItem('savename'))
  console.log("Nachname: " + sessionStorage.getItem('savelastname'))
  moveback = true
}

function muku() {
  document.getElementById("name").value = sessionStorage.getItem('savename')
  document.getElementById("lastname").value = sessionStorage.getItem('savelastname')
  console.log("Name: " + sessionStorage.getItem('savename'))
  console.log("nachname: " + sessionStorage.getItem('savelastname'))
  moveback = true
}

function sprach() {

}

function clear() {
  sessionStorage.removeItem('savename')
  sessionStorage.removeItem('savelastname')
}

function chemieselected(pfach){
	if(pfach === "pfach1.2"){
    if(document.getElementById("pfach2.2").checked == true){
      document.getElementById("pfach2.2").checked = false
        for(i = 1; i <= 3; i++) {
          document.getElementById("pfach2." + i + ".label").style.visibility = "visible"
        }
        visible("pfach2.")
    }
    if(document.getElementById("pfach3.2").checked == true) {
      document.getElementById("pfach3.2").checked = false
        for(i = 1; i <= 4; i++) {
          document.getElementById("pfach3." + i + ".label").style.visibility = "visible"
        }
        visible("pfach3.")
    }
	}
	if(pfach === "pfach2.2"){
    if(document.getElementById("pfach1.2").checked == true) {
      document.getElementById("pfach1.2").checked = false
        for(i = 1; i <= 14; i++) {
          document.getElementById("pfach1." + i + ".label").style.visibility = "visible"
        }
        visible("pfach3.")
    }
    if(document.getElementById("pfach3.2").checked == true) {
      document.getElementById("pfach3.2").checked = false
        for(i = 1; i <= 4; i++) {
          document.getElementById("pfach3." + i + ".label").style.visibility = "visible"
        }
        visible("pfach3.")
    }
    
	}
	if(pfach === "pfach3.2"){
    document.getElementById("pfach1.2").checked = false
      for(i = 1; i <= 14; i++) {
        document.getElementById("pfach1." + i + ".label").style.visibility = "visible"
      }
      visible("pfach3.")
    document.getElementById("pfach2.2").checked = false
      for(i = 1; i <= 3; i++) {
        document.getElementById("pfach2." + i + ".label").style.visibility = "visible"
      }
      visible("pfach3.")
	}
	
}

function giveoutput() {
  document.getElementById('name').value = sessionStorage.getItem('savename')
  document.getElementById('lastname').value = sessionStorage.getItem('savelastname')
}


function invisible(pfach, pnummer) {
  console.log(pfach + " : " + document.getElementById(pfach + pnummer).value);
  if(document.getElementById(pfach + pnummer).checked == true){
    if(pfach === "pfach1."){
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.visibility = "hidden"
        }
      }
    }
    if(pfach === "pfach2."){
      for(i = 1; i <= 3; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.visibility = "hidden"
        }
      }
    }
    if(pfach === "pfach3."){
      for(i = 1; i <= 4; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.visibility = "hidden"
        }
      }
    }
    if(pfach === "pfach4."){
      for(i = 1; i <= 2; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.visibility = "hidden"
        }
      }
    }
    if(pfach === "pfach5."){
      for(i = 1; i <= 0; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.visibility = "hidden"
        }
      }
    }
  } 
}

function visible(pfach) {
  if(pfach === "pfach1."){
    for(i = 1; i <= 14; i++) {
      document.getElementById(pfach + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach === "pfach2."){
    for(i = 1; i <= 3; i++) {
      document.getElementById(pfach + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach === "pfach3."){
    for(i = 1; i <= 4; i++) {
      document.getElementById(pfach + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach === "pfach4."){
    for(i = 1; i <= 2; i++) {
      document.getElementById(pfach + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach === "pfach5."){
    for(i = 1; i <= 0; i++) {
      document.getElementById(pfach + i + ".label").style.visibility = "visible"
    }
  }
}

function uncheck(pfach) {
  for(i = 1; i <= 14; i++) {
    if(document.getElementById(pfach + i).checked == true) {
      document.getElementById(pfach + i).checked = false
    }
    document.getElementById(pfach + i + ".label").style.visibility = "visible"
  }
}