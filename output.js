function save() {
    for(i = 1; i <= 5; i++) {
        for (let j = 1; j <= parseInt(sessionStorage.getItem('lp' + i)) ; j++) {
            if(document.getElementById("pfach" + i + "." + j).checked == true){
                sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
            }
        }
    }
}

function saveextra(name) {
    sessionStorage.setItem(name, "gewählt")
}

function look_for_extra() {
    let extras = 18
    for(i = 1; i <= extras; i++) {
        if(sessionStorage.getItem("extra" + i) == "true") {
            var out = "gewählt"
            if (document.getElementById("extra" + i + "label").textContent == sessionStorage.getItem('wish_for_p4_p5') + ":") {
                out = "gewählt (Wunsch für JG 12)"
            }
            document.getElementById("extra" + i).value = out
        } else {
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
