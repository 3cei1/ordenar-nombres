alert("Running")
nombres = [];

function click() {
    alert("Running")
    var nom1 = document.getElementById("nomal1").value;
    var nom2 = document.getElementById("nomal2").value;
    var nom3 = document.getElementById("nomal3").value;
    var nom4 = document.getElementById("nomal4").value; 
    nombres.push(nom1);
    nombres.push(nom2);
    nombres.push(nom3);
    nombres.push(nom4);
    console.log(nombres);
    document.getElementById("vernom").innerHTML = nombres;
    document.getElementById("btnE").style.display = "none";
    document.getElementById("btnO").style.display = "inline-block";

}

function restore(){
    nombres.sort();
    console.log(nombres);
    document.getElementById("vernom").innerHTML = nombres;
}