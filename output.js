
lp1 = 13
lp2 = 12
lp3 = 14
lp4 = 16
lp5 = 17
extras = 18



function save() {
    for(i = 1; i <= 5; i++) {
        if(i == 1) {
            for(j = 1; j<= lp1; j++) {
                if(document.getElementById("pfach" + i + "." + j).checked == true) {
                    sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
                }
            }  
        }
        if(i == 2) {
            for(j = 1; j<= lp2; j++) {
                if(document.getElementById("pfach" + i + "." + j).checked == true) {
                    sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
                }
            }  
        }
        if(i == 3) {
            for(j = 1; j<= lp3; j++) {
                if(document.getElementById("pfach" + i + "." + j).checked == true) {
                    sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
                }
            }  
        }
        if(i == 4) {
            for(j = 1; j<= lp4; j++) {
                if(document.getElementById("pfach" + i + "." + j).checked == true) {
                    sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
                }
            }  
        }
        if(i == 5) {
            for(j = 1; j<= lp5; j++) {
                if(document.getElementById("pfach" + i + "." + j).checked == true) {
                    sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
                }
            }  
        }
    }
}

function saveextra(name) {
    sessionStorage.setItem(name, "gewählt")
}

function look_for_extra() {
    for(i = 1; i <= extras; i++) {
        if(sessionStorage.getItem("extra" + i) == "true") {
            var out = "gewählt"
            console.log(document.getElementById("extra" + i + "label").textContent)
            if (document.getElementById("extra" + i + "label").textContent == sessionStorage.getItem('wish_for_p4_p5') + ":") {
                out = "gewählt (Wunsch für JG 12)"
            }
            document.getElementById("extra" + i).value = out
        }else {
            document.getElementById("extra" + i).value = "---/---"
        }
    }
}

function output() {
    document.getElementById('name').value = sessionStorage.getItem('savename')
    document.getElementById('lastname').value = sessionStorage.getItem('savelastname')
    for(i = 1; i <= 5; i++) {
        document.getElementById("pfach" + i).value = sessionStorage.getItem("pfach" + i);
    }
  }

function buttonprint() {
    document.getElementById("printbutton").style.visibility = "hidden"
    document.getElementById("resetbutton").style.visibility = "hidden"
    document.getElementById("signature").style.visibility = "visible"
    document.getElementById("signature2").style.visibility = "visible"
    document.getElementById("signature3").style.visibility = "visible"
    document.getElementById("namelabel").style.border = '0'
    document.getElementById("lastnamelabel").style.border = '0'
    document.getElementById("pfach1label").style.border = '0'
    document.getElementById("pfach2label").style.border = '0'
    document.getElementById("pfach3label").style.border = '0'
    document.getElementById("pfach4label").style.border = '0'
    document.getElementById("pfach5label").style.border = '0'
    document.getElementById("extra1label").style.border = '0'
    document.getElementById("extra2label").style.border = '0'
    document.getElementById("extra3label").style.border = '0'
    document.getElementById("extra4label").style.border = '0'
    document.getElementById("extra5label").style.border = '0'
    document.getElementById("extra6label").style.border = '0'
    document.getElementById("extra7label").style.border = '0'
    document.getElementById("extra8label").style.border = '0'
    document.getElementById("extra9label").style.border = '0'
    document.getElementById("extra10label").style.border = '0'
    document.getElementById("extra11label").style.border = '0'
    document.getElementById("extra12label").style.border = '0'
    document.getElementById("extra13label").style.border = '0'
    document.getElementById("extra14label").style.border = '0'
    document.getElementById("extra15label").style.border = '0'
    document.getElementById("extra16label").style.border = '0'
    document.getElementById("extra17label").style.border = '0'
    document.getElementById("extra18label").style.border = '0'


    print()

    document.getElementById("printbutton").style.visibility = "visible"
    document.getElementById("resetbutton").style.visibility = "visible"
    document.getElementById("signature").style.visibility = "hidden"
    document.getElementById("signature2").style.visibility = "hidden"
    document.getElementById("signature3").style.visibility = "hidden"
    document.getElementById("namelabel").style.border = '4px solid skyblue'
    document.getElementById("lastnamelabel").style.border = '4px solid skyblue'
    document.getElementById("pfach1label").style.border = '4px solid skyblue'
    document.getElementById("pfach2label").style.border = '4px solid skyblue'
    document.getElementById("pfach3label").style.border = '4px solid skyblue'
    document.getElementById("pfach4label").style.border = '4px solid skyblue'
    document.getElementById("pfach5label").style.border = '4px solid skyblue'
    document.getElementById("extra1label").style.border = '4px solid skyblue'
    document.getElementById("extra2label").style.border = '4px solid skyblue'
    document.getElementById("extra3label").style.border = '4px solid skyblue'
    document.getElementById("extra4label").style.border = '4px solid skyblue'
    document.getElementById("extra5label").style.border = '4px solid skyblue'
    document.getElementById("extra6label").style.border = '4px solid skyblue'
    document.getElementById("extra7label").style.border = '4px solid skyblue'
    document.getElementById("extra8label").style.border = '4px solid skyblue'
    document.getElementById("extra9label").style.border = '4px solid skyblue'
    document.getElementById("extra10label").style.border = '4px solid skyblue'
    document.getElementById("extra11label").style.border = '4px solid skyblue'
    document.getElementById("extra12label").style.border = '4px solid skyblue'
    document.getElementById("extra13label").style.border = '4px solid skyblue'
    document.getElementById("extra14label").style.border = '4px solid skyblue'
    document.getElementById("extra15label").style.border = '4px solid skyblue'
    document.getElementById("extra16label").style.border = '4px solid skyblue'
    document.getElementById("extra17label").style.border = '4px solid skyblue'
    document.getElementById("extra18label").style.border = '4px solid skyblue'
}
