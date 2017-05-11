/**
 * Created by Ucenik on 11.5.2017..
 */
function funkcija() {
    var x = document.getElementById("sirina").checked;
    var y = document.getElementById("visina").checked;
    if (x) {
        if (y) {
            document.getElementById("visiin").innerHTML = window.innerHeight;
            document.getElementById("siriin").innerHTML = window.innerWidth;
        } else {
            document.getElementById("siriin").innerHTML = " ";
            document.getElementById("visiin").innerHTML = " ";
        }
    }else if(y){
        document.getElementById("siriin").innerHTML = " ";
        document.getElementById("visiin").innerHTML = window.innerHeight;
    }else if(x){
        document.getElementById("siriin").innerHTML = window.innerWidth;
        document.getElementById("visiin").innerHTML = " ";
    }else{
        document.getElementById("visiin").innerHTML = "Molimo odaberite";
    }
}

function prozor() {
    prozorcic = window.open("https://www.google.hr", "", "width=200,height=200");
}

function zatvori() {
    prozorcic.close();
}

function monitor() {
    var sh = document.getElementById("visinamonitora").checked;
    var sw = document.getElementById("sirinamonitora").checked;
    var uh = document.getElementById("visinaminus").checked;
    var uw = document.getElementById("sirinaminus").checked;
    if(sh){
        document.getElementById("visincina").innerHTML = screen.height;
    }else{
        document.getElementById("visincina").innerHTML = "";
    }
    if(sw){
        document.getElementById("sirincina").innerHTML = screen.width;
    }else{
        document.getElementById("sirincina").innerHTML = "";
    }
    if(uh){
        document.getElementById("visinetina").innerHTML = screen.availHeight;
    }else{
        document.getElementById("visinetina").innerHTML = "";
    }
    if(uw){
        document.getElementById("sirinetina").innerHTML = screen.availWidth;
    }else{
        document.getElementById("sirinetina").innerHTML = "";
    }
}
obj{
    lokacija = window.location.hostname;
    wloc = window.location.href;
}