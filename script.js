function url() { 
    let url = window.location.href
    let params = (new URL(url).searchParams)

    document.getElementById("name").value = params.get('name') + " " + params.get('lastname')

    params.set('hallo', 'byby')

    sessionStorage.setItem('savename', params.get('name'))
    sessionStorage.setItem('savelastname', params.get('lastname'))

    console.log("Name: " + sessionStorage.getItem('savename'))
    console.log("Nachname: " + sessionStorage.getItem('savelastname'))
}


function startset() {
  sessionStorage.setItem('savename', document.getElementById("name").value)
  sessionStorage.setItem('savelastname', document.getElementById("lastname").value)

  console.log(sessionStorage.getItem('savename'))
  console.log(sessionStorage.getItem('savelastname'))
}

function selection() {
  console.log(sessionStorage.getItem('savename'))
  console.log(sessiontorage.getItem('savelastname'))
}

function wahl1() {
    location.href = "wahl.html"
}

function wahl2() {
  location.href = "wahl2.html"
}

function page2() {
  document.getElementById("name").value = sessionStorage.getItem('savename') + " " + sessionStorage.getItem('savelastname')
  console.log("Name: " + sessionStorage.getItem('savename'))
  console.log("Nachname: " + sessionStorage.getItem('savelastname'))
}

function wahl3() {
  location.href = "output.html"
}


function clear() {
  sessionStorage.clear()
}

function selected(pfach, pnummer){
  for(i = 1; i <= 20; i++) {
    if(pnummer == i) {
        if(pfach != "pfach1." && document.getElementById("pfach1." + pnummer).checked == true) {
          document.getElementById("pfach1." + pnummer).checked = false
          uncheck("pfach1.")
        }
        if(pfach != "pfach2." && document.getElementById("pfach2." + pnummer).checked == true) {
          document.getElementById("pfach2." + pnummer).checked = false
          uncheck("pfach2.")
        }
        if(pfach != "pfach3." && document.getElementById("pfach3." + pnummer).checked == true) {
          document.getElementById("pfach3." + pnummer).checked = false
          uncheck("pfach3.")
        }
        if(pfach != "pfach4." && document.getElementById("pfach4." + pnummer).checked == true) {
          document.getElementById("pfach4." + pnummer).checked = false
          uncheck("pfach4.")
        }
        if(pfach != "pfach5." && document.getElementById("pfach5." + pnummer).checked == true) {
          document.getElementById("pfach5." + pnummer).checked = false
          uncheck("pfach5.")
        }
      }
    }
  }


/*function invisible(pfach, pnummer) {
  console.log(pfach + " : " + document.getElementById(pfach + pnummer).value);
  if(document.getElementById(pfach + pnummer).checked == true){
    if(pfach === "pfach1."){
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
    }
    if(pfach === "pfach2."){
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
    }
    if(pfach === "pfach3."){
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
    }
    if(pfach === "pfach4."){
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
    }
    if(pfach === "pfach5."){
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
    }
  } 
}
*/

function visible(pfach) {
  if(pfach === "pfach1."){
    for(i = 1; i <= 14; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach2."){
    for(i = 1; i <= 14; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach3."){
    for(i = 1; i <= 14; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach4."){
    for(i = 1; i <= 16; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach5."){
    for(i = 1; i <= 17; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
}


function uncheck(pfach) {
  for(i = 1; i <= 17; i++) {
    if(document.getElementById(pfach + i).checked == true) {
      document.getElementById(pfach + i).checked = false
    }
    document.getElementById(pfach + i + ".label").style.opacity = '1'
  }
}


/*-----------------------------------------------------------------------------------------------------------------*/
