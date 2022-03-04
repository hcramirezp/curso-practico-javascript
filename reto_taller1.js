// Programa para calcular la altura de un triangulo isósceles recibiendo como parámetros los tres
//lados del triángulo.

function alturaIsosceles(lado1, lado2, base) {
    if((lado1 === lado2) && (lado1 != base)) {
        const altura = Math.sqrt (lado1**2 - (base**2 / 4));
        alert("Has ingresado las medidas de triángulo isósceles y el valor de su altura es " + altura);
    } else {
        alert("Las medidas ingresadas NO corresponden a un triángulo isósceles");
    }
}

function calcularAlturaIsosceles() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const alturaTriangulo = alturaIsosceles(value1, value2, value3);
    //alert(perimTriangulo);
}
