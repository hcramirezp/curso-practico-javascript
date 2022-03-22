//Programa para calcular la media aritmética de una serie de números

function calcularMediaAritmetica(listaValores) {
    const sumaListaValores = listaValores.reduce(       // Utilizando el método reduce de los arrays
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );
    const promedioListaValores = sumaListaValores / listaValores.length;
    return promedioListaValores;
}

function onClickButtonMediaAritmetica() {
    const inputNumbers = document.getElementById("InputNumbers");
    let valores = inputNumbers.value;
    valores = valores.split(',').map(Number); //Convierto el valor del campo InputNumbers en un array de valores numéricos

    const mediaAritmetica = calcularMediaAritmetica(valores);
    const results = document.getElementById("ResultP");
    results.innerText = "El promedio de los valores ingresados es: " + mediaAritmetica;
}
