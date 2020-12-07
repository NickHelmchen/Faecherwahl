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

function terminator() {
  sessionStorage.clear()
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
  location.href = "wahlmanu.html"
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
  for(i = 1; i <= 17; i++) {
    if(pnummer == i) {
        if(pfach != "pfach1." && i<=13 && document.getElementById("pfach1." + pnummer).checked == true) {
          document.getElementById("pfach1." + pnummer).checked = false
          uncheck("pfach1.")
        }
        if(pfach != "pfach2." && i<=13 && document.getElementById("pfach2." + pnummer).checked == true) {
          document.getElementById("pfach2." + pnummer).checked = false
          uncheck("pfach2.")
        }
        if(pfach != "pfach3." && i<=14 && document.getElementById("pfach3." + pnummer).checked == true) {
          document.getElementById("pfach3." + pnummer).checked = false
          uncheck("pfach3.")
        }
        if(pfach != "pfach4." && i<=16 && document.getElementById("pfach4." + pnummer).checked == true) {
          document.getElementById("pfach4." + pnummer).checked = false
          uncheck("pfach4.")
        }
        if(pfach != "pfach5." && document.getElementById("pfach5." + pnummer).checked == true) {
          document.getElementById("pfach5." + pnummer).checked = false
          uncheck("pfach5.")
        }
      }
    }
    nextone(pfach)
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
    for(i = 1; i <= 13; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach2."){
    for(i = 1; i <= 13; i++) {
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
  if(pfach == "pfach1." || "pfach2.") {
    for(i = 1; i <= 13; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i).checked = false
      }
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
  }
  if(pfach == "pfach3.") {
    for(i = 1; i <= 14; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i).checked = false
      }
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
  }else if(pfach == "pfach4.") {
    for(i = 1; i <= 16; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i).checked = false
      }
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
  }else if(pfach == "pfach5.") {
    for(i = 1; i <= 17; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i).checked = false
      }
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
  }
}

/*-----------------------------------------------------------------------------------------------------------------*/

function afterwards() {
  for(i = 1; i<=5; i++) {
    if(i == 1) {
      for(j = 1; j<=13; j++) {
        if(document.getElementById("pfach1." + j).checked == true) {
          document.getElementById("pfach1." + j).checked = false
        }
      }
    }
    if(i == 2){
      for(j = 1; j<=13; j++) {
          document.getElementById("pfach2." + j + ".label").style.visibility = "hidden"
          if(document.getElementById("pfach2." + j).checked == true) {
            document.getElementById("pfach2." + j).checked = false
          }
      }
    }
    if(i == 3){
      for(j = 1; j<=14; j++) {
        document.getElementById("pfach3." + j + ".label").style.visibility = "hidden"
        if(document.getElementById("pfach3." + j).checked == true) {
          document.getElementById("pfach3." + j).checked = false
        }
      }
    }
    if(i == 4){
      for(j = 1; j<=16; j++) {
        document.getElementById("pfach4." + j + ".label").style.visibility = "hidden"
        if(document.getElementById("pfach4." + j).checked == true) {
          document.getElementById("pfach4." + j).checked = false
        }
      }
    }
    if(i == 5){
      for(j = 1; j<=17; j++) {
        document.getElementById("pfach5." + j + ".label").style.visibility = "hidden"
        if(document.getElementById("pfach5." + j).checked == true) {
          document.getElementById("pfach5." + j).checked = false
        }
      }
    }
  }
}

function nextone(pfach) {
  if(pfach == "pfach1.") {
    for(i = 1; i<=13; i++) {
      document.getElementById("pfach2." + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach == "pfach2.") {
    for(i = 1; i<=14; i++) {
      document.getElementById("pfach3." + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach == "pfach3.") {
    for(i = 1; i<=16; i++) {
      document.getElementById("pfach4." + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach == "pfach4.") {
    for(i = 1; i<=17; i++) {
      document.getElementById("pfach5." + i + ".label").style.visibility = "visible"
    }
  }
}

/*-----------------------------------------------------------------------------------------------------------------*/
