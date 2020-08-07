var fileName = null;
var current = [];
const fs = require('fs');


function create() {
    if (fileName == null) { document.getElementById("fileName").innerHTML = "<h1> new </h1>"; }
    else {
        document.getElementById("fileName").innerHTML = "<h1>" + fileName + "</h1>";
    }

    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    document.getElementById("lastAdded").innerHTML = "<p>" + date + "</p>";

    document.getElementById("control").innerHTML = " <button class='big-btn' onclick='pin()'>Add</button>  <br><br> <textarea style='white-space: pre-wrap;' name='IN' cols='40' rows='10' id='IN'></textarea>";
    document.getElementById("textFields").innerHTML = "";


}

function save() {
    var a = document.body.appendChild(
        document.createElement("a")
    );
    a.download = "example.html";
    a.href = "data:text/html," + document.getElementById("textFields").innerHTML; // Grab the HTML
    a.click();


}

function load() {

}


function pin() {
    var input = document.getElementsByName("IN")[0].value;
    Sinput = String(input);
    var Ainput = Sinput.split(" ");


    if (Sinput.includes("?")) {
        var colour = "teal"
    } else {
        var colour = "grey"
    }

    var content = "<p style='background-color:" + colour + "; white-space: pre-wrap; color:white';>" + input + "</p>"
    
    if(Sinput.includes("img")){
        var start = Ainput.indexOf("img");
        var img_Url = Ainput[start +1];
        content = "<img src='"+img_Url+"'>";
    }

    

    current.push(input);
    console.log(content);
    document.getElementById("textFields").innerHTML += content;
}