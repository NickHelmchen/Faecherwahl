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

function cookies() {

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

function selected(pfach, pnummer){
  for(i = 1; i <= 20; i++) {
    if(pnummer == i) {
        if(pfach != "pfach1." && document.getElementById("pfach1." + pnummer).checked == true) {
          document.getElementById("pfach1." + pnummer).checked = false
          visible("pfach1.")
        }
        if(pfach != "pfach2." && document.getElementById("pfach2." + pnummer).checked == true) {
          document.getElementById("pfach2." + pnummer).checked = false
          visible("pfach2.")
        }
        if(pfach != "pfach3." && document.getElementById("pfach3." + pnummer).checked == true) {
          document.getElementById("pfach3." + pnummer).checked = false
          visible("pfach3.")
        }
        if(pfach != "pfach4." && document.getElementById("pfach4." + pnummer).checked == true) {
          document.getElementById("pfach4." + pnummer).checked = false
          visible("pfach4.")
        }
        if(pfach != "pfach5." && document.getElementById("pfach5." + pnummer).checked == true) {
          document.getElementById("pfach5." + pnummer).checked = false
          visible("pfach5.")
        }
      }
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
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.visibility = "hidden"
        }
      }
    }
    if(pfach === "pfach3."){
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.visibility = "hidden"
        }
      }
    }
    if(pfach === "pfach4."){
      for(i = 1; i <= 14; i++) {
        if (i != pnummer) {
          document.getElementById(pfach + i + ".label").style.visibility = "hidden"
        }
      }
    }
    if(pfach === "pfach5."){
      for(i = 1; i <= 14; i++) {
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
    for(i = 1; i <= 14; i++) {
      document.getElementById(pfach + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach === "pfach3."){
    for(i = 1; i <= 14; i++) {
      document.getElementById(pfach + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach === "pfach4."){
    for(i = 1; i <= 14; i++) {
      document.getElementById(pfach + i + ".label").style.visibility = "visible"
    }
  }
  if(pfach === "pfach5."){
    for(i = 1; i <= 14; i++) {
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


/*-----------------------------------------------------------------------------------------------------------------*/

// --- Config --- //
var purecookieTitle = "Ich mag Cookies."; // Title
var purecookieDesc = "Wir nutzen Cookies, um unsere Dienste zu erbringen. Mit Nutzung dieser Seite akzeptieren Sie Cookies."; // Description
var purecookieLink = '<a href="" target="_blank">Noch Fragen?</a>'; // Cookiepolicy link
var purecookieButton = "Verstanden"; // Button text
// ---        --- //


function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function pureFadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function cookieConsent() {
  if (!getCookie('purecookieDismiss')) {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + ' ' + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + '</a></div></div>';
	pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() {
  setCookie('purecookieDismiss','1',7);
  pureFadeOut("cookieConsentContainer");
}

window.onload = function() { cookieConsent(); };