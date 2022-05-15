let alter = document.getElementById('alter');
let alterOutput = "volljährig" || "minderjährig";

function adult() {
    if (alter.value >= 18) {
        console.log("true");
        alterOutput = "Ja, du bist volljährig."

    }
    else if (alter.value <= 18) {
        console.log("false");
        alterOutput = "Nein, du bist noch minderjährig."

    }
    document.getElementById('output').innerHTML = alterOutput;
}





/*if (alter >= 18) {
    document.getElementById("output").innerHTML = "volljährig";
}
else {
    document.getElementById("output").innerHTML = "minderjährig";
}*/

switch (new Date().getDay()) {
    case 0:
        window.alert("Heute ist Sonntag");
        break;
    case 1:
        window.alert("Heute ist Montag");
        break;
    case 2:
        window.alert("Heute ist Dienstag");
        break;
    case 3:
        window.alert("Heute ist Mittwoch");
        break;
    case 4:
        window.alert("Heute ist Donnerstag");
        break;
    case 5:
        window.alert("Heute ist Freitag");
        break;
    case 6:
        window.alert("Heute ist Samstag");
}

