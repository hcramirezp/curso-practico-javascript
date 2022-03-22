//Programa para calcular el promedio geométrico o media geométrica
function calcularPromGeometrico(listaElementos) {
    const cantidadElementos = listaElementos.length;
    const multListaElementos = listaElementos.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado * nuevoElemento;
        }
        );

        const promGeometrico = Math.pow(multListaElementos, 1/cantidadElementos);
        return promGeometrico;
}

function onClickButtonCalculaPromGeometrico() {
    const inputNumbers = document.getElementById("InputNumbers");
    let valores = inputNumbers.value;
    valores = valores.split(',').map(Number); //Convierto el valor del campo InputNumbers en un array de valores numéricos

    let promGeomValores = 0;
    promGeomValores = calcularPromGeometrico(valores);

    const results = document.getElementById("ResultP");
    results.innerText = "El promedio geométrico de los valores ingresados es: " + promGeomValores;
}
