//Programa para calcular la moda en un conjunto de valores.

function calcularModa(arrElementos) {
    //Se crea un objeto que va a alojar cada uno de los distintos elementos repetidos en el array
    const arrElementosCount = {};

    //Se recorre el arreglo y se guardan los diferentes valores encontrados por cada elemento
    arrElementos.map(
        function (elemento) {
            if(arrElementosCount[elemento]){
                arrElementosCount[elemento] += 1;
            } else {
                arrElementosCount[elemento] = 1;
            }
        }
    );

    const arrayElementos = Object.entries(arrElementosCount).sort(
        function (valAcum, valNvo){
            return valAcum[1] - valNvo[1];
        }
    );

    return moda = arrayElementos[arrayElementos.length - 1];
}

function onClickButtonCalculaModa() {
    const inputNumbers = document.getElementById("InputNumbers");
    const valores = inputNumbers.value;
    const values = valores.split(',').map(Number); //Convierto el valor del campo InputNumbers en un array de valores numéricos
    let valorModa = calcularModa(values);
    const results = document.getElementById("ResultP");
    results.innerText = "La moda para el conjunto de valores ingresados es: " + valorModa[0];
}
