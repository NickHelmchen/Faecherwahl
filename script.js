//Anzahl der Fächer im jewailigen Prüfungsbereich

lp1 = 13
lp2 = 12
lp3 = 14
lp4 = 16
lp5 = 17

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
  var temp1 = ''
  var temp2 = ''
  temp1 = sessionStorage.getItem("savename")
  temp2 = sessionStorage.getItem("savelastname")
  sessionStorage.clear()
  sessionStorage.setItem('savename', temp1)
  sessionStorage.setItem('savelastname', temp2)
}

function restart() {
  afterwards()
  for(i = 1; i <= 5; i++) {
    if(i === 1) {
      for(j = 1; j <= lp1; j++) {
        document.getElementById("pfach1." + j).disabled = false
      }
    }
    if(i === 2) {
      for(j = 1; j <= lp2; j++) {
        document.getElementById("pfach2." + j).disabled = false
      }
    }
    if(i === 3) {
      for(j = 1; j <= lp3; j++) {
        document.getElementById("pfach3." + j).disabled = false
      }
    }
    if(i == 4) {
      for(j = 1; j <= lp4; j++) {
        document.getElementById("pfach4." + j).disabled = false
      }
    }
    if(i == 5) {
      for(j = 1; j <= lp5; j++) {
        document.getElementById("pfach5." + j).disabled = false
      }
    }
    //Titel (Hovertexte) der Sprachen werden zurückgesetzt
    document.getElementById("pfach" + i + ".3.label").title = "Kernfach, Bereich A"    
    document.getElementById("pfach" + i + ".6.label").title = "Kernfach, Bereich A"    
    document.getElementById("pfach" + i + ".7.label").title = "Kernfach, Bereich A"    
    document.getElementById("pfach" + i + ".11.label").title = "Kernfach, Bereich A" 
  }
  uncheck("pfach1.")
  uncheck("pfach2.")
  uncheck("pfach3.")
  uncheck("pfach4.")
  uncheck("pfach5.")

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
  if(sessionStorage.getItem('profil') == 'mana') {
    location.href = "wahlmanu.html"
  }
  if(sessionStorage.getItem('profil') == 'spra') {
    location.href = "wahlspra.html"
  }
  if(sessionStorage.getItem('profil') == 'muku') {
    location.href = "wahlmuku.html"
  }
  if(sessionStorage.getItem('profil') == 'gese') {
    location.href = "wahlgese.html"
  }
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
  for(i = 1; i <= lp5; i++) {
    if(pnummer == i) {
        if(pfach != "pfach1." && i<=lp1 && document.getElementById("pfach1." + pnummer).checked == true) {
          document.getElementById("pfach1." + pnummer).checked = false
          uncheck("pfach1.")
        }
        if(pfach != "pfach2." && i<=lp2 && document.getElementById("pfach2." + pnummer).checked == true) {
          document.getElementById("pfach2." + pnummer).checked = false
          uncheck("pfach2.")
        }
        if(pfach != "pfach3." && i<=lp3 && document.getElementById("pfach3." + pnummer).checked == true) {
          document.getElementById("pfach3." + pnummer).checked = false
          uncheck("pfach3.")
        }
        if(pfach != "pfach4." && i<=lp4 && document.getElementById("pfach4." + pnummer).checked == true) {
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
    for(i = 1; i <= lp1; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach2."){
    for(i = 1; i <= lp2; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach3."){
    for(i = 1; i <= lp3; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach4."){
    for(i = 1; i <= lp4; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i + ".label").style.opacity = '1'
      }
      else { 
        document.getElementById(pfach + i + ".label").style.opacity = '0.5'
        }
      }
  }
  if(pfach === "pfach5."){
    for(i = 1; i <= lp5; i++) {
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
  if(pfach == "pfach1.") {
    for(i = 1; i <= lp1; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i).checked = false
      }
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
  }
  if(pfach == "pfach2.") {
    for(i = 1; i <= lp2; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i).checked = false
      }
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
  }
  if(pfach == "pfach3.") {
    for(i = 1; i <= lp3; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i).checked = false
      }
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
  }else if(pfach == "pfach4.") {
    for(i = 1; i <= lp4; i++) {
      if(document.getElementById(pfach + i).checked == true) {
        document.getElementById(pfach + i).checked = false
      }
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
  }else if(pfach == "pfach5.") {
    for(i = 1; i <= lp5; i++) {
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
      for(j = 1; j<=lp1; j++) {
        if(document.getElementById("pfach1." + j).checked == true) {
          document.getElementById("pfach1." + j).checked = false
        }
      }
    }
    if(i == 2){
      for(j = 1; j<=lp2; j++) {
          document.getElementById("pfach2." + j + ".label").style.visibility = "hidden"
          if(document.getElementById("pfach2." + j).checked == true) {
            document.getElementById("pfach2." + j).checked = false
          }
      }
    }
    if(i == 3){
      for(j = 1; j<=lp3; j++) {
        document.getElementById("pfach3." + j + ".label").style.visibility = "hidden"
        if(document.getElementById("pfach3." + j).checked == true) {
          document.getElementById("pfach3." + j).checked = false
        }
      }
    }
    if(i == 4){
      for(j = 1; j<=lp4; j++) {
        document.getElementById("pfach4." + j + ".label").style.visibility = "hidden"
        if(document.getElementById("pfach4." + j).checked == true) {
          document.getElementById("pfach4." + j).checked = false
        }
      }
    }
    if(i == 5){
      for(j = 1; j<=lp5; j++) {
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
    for(i = 1; i<=lp2; i++) {
      document.getElementById("pfach2." + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach == "pfach2.") {
    for(i = 1; i<=lp3; i++) {
      document.getElementById("pfach3." + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach == "pfach3.") {
    for(i = 1; i<=lp4; i++) {
      document.getElementById("pfach4." + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach == "pfach4.") {
    for(i = 1; i<=lp5; i++) {
      document.getElementById("pfach5." + i + ".label").style.visibility = "visible"
    }
  }
}

/*-----------------------------------------------------------------------------------------------------------------*/
