//Programa para calcular la mediana de un conjunto de valores

function calcularMediaAritmetica(listaValores) {
    // Utilizando el método reduce de los arrays
    const sumaListaValores = listaValores.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
        );
    const promedioListaValores = sumaListaValores / listaValores.length;
    return promedioListaValores;
}

function calcularMediana(listaElementos) {
    listaElementos.sort(                       //Se ordenan los elementos del array de menor a mayor
        function(val1, val2){
            return val1 - val2;
        }
    );

    const mitadListaElementos = parseInt(listaElementos.length / 2);

    function esPar(numero) {
        if(numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if(esPar(listaElementos.length)) {                     //Se evalúa si la lista contiene un número de elementos par.
        const valor1 = listaElementos[mitadListaElementos - 1];
        const valor2 = listaElementos[mitadListaElementos];

        const promedioValores = calcularMediaAritmetica([valor1, valor2]);
        mediana = promedioValores;
    } else {                                            //La Lista contiene un número impar de elementos
        mediana = listaElementos[mitadListaElementos];
    }

    //alert("Los valores ingresados fueron: " + listaElementos + " y el valor de la mediana es: " + mediana);
    return mediana;

}

function onClickButtonCalculaMediana() {
    const inputNumbers = document.getElementById("InputNumbers");
    let valores = inputNumbers.value;
    valores = valores.split(',').map(Number); //Convierto el valor del campo InputNumbers en un array de valores numéricos

    let medianaValores = 0;
    medianaValores = calcularMediana(valores);

    const results = document.getElementById("ResultP");
    results.innerText = "La mediana de los valores ingresados es: " + medianaValores;
}
