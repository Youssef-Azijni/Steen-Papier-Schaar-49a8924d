var beurt = 1;
var speler;



function steen() {
    speler = "steen";
    document.cookie = beurt + "=" + player;
    location.reload();
}

function papier() {
    speler = "papier";
    document.cookie = beurt + "=" + player;
    location.reload();
}

function schaar() {
    speler = "schaar";
    document.cookie = beurt + "=" + player;
    location.reload();
}


function valCookie(cname) {
    var name= cname + "=";
    var deCookie = decodeURIComponent(document.cookie);
    var cache = deCookie.split(';');
    for(var i =0; i <ca.length; i++) {
        var c = cache[i];
        while (c.charAt(0) === ' ') {
            c = c.substr(name.length, c.length);
        }
    }
}


if ((valCookie(1) == "steen") || (valCookie(1) == "papier") || valCookie(1) == "schaar" ) {
    document.getElementById("h1").innerHTML = "Beurt: Speler 2";
    beurt = 2;
}

const spelerKeuze1 = valCookie(1);
const spelerKeuze2 = valCookie(2);


if (valCookie(2) === "steen") {
    if(spelerKeuze1 === spelerKeuze2) {
        document.getElementById("h1").innerHTML = "Result: TIE";
        document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
    } else {
        if(spelerKeuze1 === "papier") {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 1";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        } else {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 2";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        }
    }
}

if (valCookie(2) === "papier") {
    if(spelerKeuze1 === spelerKeuze2) {
        document.getElementById("h1").innerHTML = "Result: TIE";
        document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
    } else {
        if(spelerKeuze1 === "schaar") {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 1";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        } else {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 2";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        }
    }
}

if (valCookie(2) === "schaar") {
    if(spelerKeuze1 === spelerKeuze2) {
        document.getElementById("h1").innerHTML = "Result: TIE";
        document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Play againF! </button>';
    } else {
        if(spelerKeuze1 === "steen") {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 1";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        } else {
            document.getElementById("h1").innerHTML = "Result: Winnaar is player 2";
            document.getElementById("resetKnop").innerHTML = '<button onclick="delete_cookie()"> Speel nog is </button>';
        }
    }
}

function delete_cookie() {
    document.cookie = 1 + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 2 + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.reload();2))