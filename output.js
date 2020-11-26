function save() {
    for(i = 1; i <= 5; i++) {
        for(j = 1; j<= 14; j++) {
            if(document.getElementById("pfach" + i + "." + j).checked == true) {
                sessionStorage.setItem("pfach" + i, document.getElementById("pfach" + i + "." + j).value)
            }
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

