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

function Divprint() {
    var printContents = document.getElementById("printArea").innerHTML
    var originalContents = document.body.innerHTML

    document.body.innerHTML = printContents

    window.print()

    document.body.innerHTML = originalContents
}