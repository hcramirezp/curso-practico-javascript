//Programa para calcular promedios, mediana de salarios

//Funciones Helpers
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


function esPar (numero) {
    return (numero % 2 === 0);
}

//Calculo de Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


const medianaGeneralCol =  medianaSalarios(salariosColSorted);

//Mediana del top 10% de salarios
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col =  medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);