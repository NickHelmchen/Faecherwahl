
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
        document.getElementById("pfach" + i).value = sessionStorage.getItem("pfach" + i)
    }
}
