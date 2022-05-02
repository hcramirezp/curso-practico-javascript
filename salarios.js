//Programa para ingresar la informacion de personas y su salario
const colombia = [];

colombia.push({
    name: "Juanita",
    salary: 1000
});

colombia.push({
    name: "Ricardo",
    salary: 1500
});

colombia.push({
    name: "Andrea",
    salary: 850
});

colombia.push({
    name: "Brenda",
    salary: 650
});

colombia.push({
    name: "Alberto",
    salary: 2500
});

colombia.push({
    name: "Monica",
    salary: 1100
});

colombia.push({
    name: "Carlos",
    salary: 2000
});

colombia.push({
    name: "Natalia",
    salary: 3200
});

colombia.push({
    name: "Hernando",
    salary: 700
});

colombia.push({
    name: "Nicole",
    salary: 800
});

colombia.push({
    name: "Vanessa",
    salary: 1000
});

colombia.push({
    name: "Santiago",
    salary: 4500
});

colombia.push({
    name: "Rubén",
    salary: 10000
});

colombia.push({
    name: "Laura",
    salary: 500
});

colombia.push({
    name: "Ramona",
    salary: 600
});

colombia.push({
    name: "Victor",
    salary: 900
});

colombia.push({
    name: "Paula",
    salary: 1200
});

colombia.push({
    name: "Gabriel",
    salary: 5000
});

colombia.push({
    name: "Sonia",
    salary: 1100
});

colombia.push({
    name: "Iván",
    salary: 900
});

// console.log(colombia[0].name);
// console.log(colombia[0].salary);


// colombia.forEach((item, index) => {
//     const lista = document.getElementById("ulListado");
//     const container = document.createElement("li");
//     lista.appendChild(container);
//     container.className = `reg_colombia_${index + 1}`;
//     container.id = `reg_colombia_${index + 1}`;
//     let content = document.createTextNode(`${item.name} - ${item.salary}`);
//     //container.innerHTML = `${item.name} - ${item.salary}`;
//     container.appendChild(content);
// });


//creo el elemento div
var container = document.createElement("div");
document.body.appendChild(container);


//le añado un id al elemento div1
var div = document.getElementsByTagName("div")[0];
div.className = "flex-container";
div.id = "contenedor";

var mostrarInfo = colombia.map(function(info){
    return  '<div>'
                +'<h2>'+info.name+'</h2>'
                +'<p>'+info.salary+'</p>'
            +'</div>';
}).join('')
document.getElementById("contenedor").innerHTML= mostrarInfo;