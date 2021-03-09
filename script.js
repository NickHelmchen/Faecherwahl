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
    let lp = parseInt(sessionStorage.getItem('lp' + i))
    for (let j = 1; j <= lp ; j++) {
      document.getElementById("pfach" + i + "." + j).disabled = false
    }

    //Titel (Hovertexte) der Sprachen werden zurückgesetzt
    document.getElementById("pfach" + i + ".3.label").title = "Kernfach, Bereich A"    
    document.getElementById("pfach" + i + ".6.label").title = "Kernfach, Bereich A"    
    document.getElementById("pfach" + i + ".7.label").title = "Kernfach, Bereich A"    
    document.getElementById("pfach" + i + ".11.label").title = "Kernfach, Bereich A" 
    document.getElementById("info_kf").value = ""

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

}

function wahl(a) {
    location.href = a + ".html"
}

function wahl2() {
  if (sessionStorage.getItem('profil') == 'mana') {
    location.href = "wahlmanu.html"
  } else {
    location.href = "wahl" + sessionStorage.getItem('profil') + ".html"
  }
}

function page2() {
  document.getElementById("name").value = sessionStorage.getItem('savename') + " " + sessionStorage.getItem('savelastname')
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

function visible(pfach) {
  let j 
  switch (pfach) {
    case 'pfach1.':
      j = 1
      break;
    case 'pfach2.':
      j = 2
      break;
    case 'pfach3.':
      j = 3
      break;
    case 'pfach4.':
      j = 4
      break;
    case 'pfach5.':
      j = 5
      break;
  }
  for (i = 1; i <= sessionStorage.getItem('lp' + j); i++) {
    console.log(pfach + i)
    if(document.getElementById(pfach + i).checked == true) {
      document.getElementById(pfach + i + ".label").style.opacity = '1'
    }
    else { 
      document.getElementById(pfach + i + ".label").style.opacity = '0.5'
    }
  }
}


function uncheck(pfach) {
  let j 
  switch (pfach) {
    case 'pfach1.':
      j = 1
      break;
    case 'pfach2.':
      j = 2
      break;
    case 'pfach3.':
      j = 3
      break;
    case 'pfach4.':
      j = 4
      break;
    case 'pfach5.':
      j = 5
      break;
  }
  for(i = 1; i <= sessionStorage.getItem('lp' + j); i++) {
    if(document.getElementById(pfach + i).checked == true) {
      document.getElementById(pfach + i).checked = false
    }
    document.getElementById(pfach + i + ".label").style.opacity = '1'
  }
}
/*-----------------------------------------------------------------------------------------------------------------*/


function afterwards() {
  console.log('Hallo. Hier ist Afterwards おはよ / こんにちは, 안녕하세요,　一、二、三, 二千二十, 이천이십일년 이월 이십오일')
  console.log('저는 빵 좋아하는데 기차를 더 좋아해요')
  console.log('わたし　は　列車　が　すきです')
  for(i = 1; i<=5; i++) {
    for (let j = 1; j <= sessionStorage.getItem('lp' + i); j++) {
      if (i === 1) {
        document.getElementById("pfach" + i + "." + j + ".label").style.visibility = "visible"
      } else {
        document.getElementById("pfach" + i + "." + j + ".label").style.visibility = "hidden"
      }
      if(document.getElementById("pfach" + i + "." + j).checked == true) {
        document.getElementById("pfach" + i + "." + j).checked = false
      }
    }
  }
}
/*
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
*/
function nextone(pfach) {
  let j 
  switch (pfach) {
    case 'pfach1.':
      j = 2
      break;
    case 'pfach2.':
      j = 3
      break;
    case 'pfach3.':
      j = 4
      break;
    case 'pfach4.':
      j = 5
      break;
  }
  for(i = 1; i <= sessionStorage.getItem('lp' + j); i++) {
    document.getElementById("pfach" + j + "."+ i + ".label").style.visibility = "visible"
  }
}

function nicht_waehlen_Fach(fach){
  sessionStorage.setItem('nicht_waehlen_Fach' , fach + "_w")
  switch (fach) {
    case 'franzoesisch':
      document.getElementById('info_nicht_waehlen').value = "Dieses Fach wird in der nächsten Auswahlmöglichkeit nicht mehr wählbar sein: Französisch"   
      break;
    case 'powi':
        document.getElementById('info_nicht_waehlen').value = "Dieses Fach wird in der nächsten Auswahlmöglichkeit nicht mehr wählbar sein: Politik Wirtschaft"   
        break;
    default:
      document.getElementById('info_nicht_waehlen').value = "Dieses Fach wird in der nächsten Auswahlmöglichkeit nicht mehr wählbar sein: " + fach[0].toUpperCase() + fach.slice(1,fach.length) 
      break;
  }
}

function go_back() {
  terminator()
  logicvariables()
  location.href='wahl.html'
}
/*-----------------------------------------------------------------------------------------------------------------*/
