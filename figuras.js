// Programa para calcular el perímetro y el área de las figuras geométricas cuadrado, triangulo y circulo

//Cálculo perímetro y área del cuadrado
//console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm.");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2.");
//console.groupEnd();

//Cálculo perímetro y área del triángulo
//console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, y "
//     + baseTriangulo + "cm.");
// console.log("La altura del triángulo mide: " + alturaTriangulo + "cm.");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm.");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2.");

//console.groupEnd();

//Cálculo perímetro y área del círculo
//console.group("Circulos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo mide: " + radioCirculo + "cm.");

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}


//PI
const PI =  Math.PI;
//console.log("La constante PI tiene un valor de: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


//console.groupEnd();

//Interacción con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = Number(input.value);

    const area =areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const perimTriangulo = perimetroTriangulo(value1, value2, value3);
    alert(perimTriangulo);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo3");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo4");
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}


function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);

    const area =areaCirculo(value);
    alert(area);
}
