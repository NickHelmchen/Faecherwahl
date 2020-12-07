function save() {
    for(i = 1; i <= 5; i++) {
        if(i == 1 || 2) {
            for(j = 1; j<= 13; j++) {
                if(document.getElementById("pfach" + i + "." + j).checked == true) {
                    sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
                }
            }  
        }
        if(i == 3) {
            for(j = 1; j<= 13; j++) {
                if(document.getElementById("pfach" + i + "." + j).checked == true) {
                    sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
                }
            }  
        }
        if(i == 4) {
            for(j = 1; j<= 16; j++) {
                if(document.getElementById("pfach" + i + "." + j).checked == true) {
                    sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
                }
            }  
        }
        if(i == 5) {
            for(j = 1; j<= 17; j++) {
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
    for(i = 1; i <= 10; i++) {
        if(sessionStorage.getItem("extra" + i) != null) {
            document.getElementById("extra" + i).value = "gewählt"
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
    document.getElementById('extra2').value = "----/----"
  }

function buttonprint() {
    document.getElementById("printbutton").style.visibility = "hidden"

    print()

    document.getElementById("printbutton").style.visibility = "visible"
}