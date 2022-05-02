//Programa para calcular la cuota de un préstamo que debe pagar el cliente

function calcularTasaEfectivaMensual(tasaAnual) {
    let tasaEfectivaAnual = tasaAnual / 100;
    const tasaEfectivaMensual = ((1 + tasaEfectivaAnual) ** ((1/12) - 1)) / 100;
    return tasaEfectivaMensual;
}
// console.log("TEM = " + tasaEfectivaMensual);

function calcularCuotaMensual(valorPrestamo, periodo, tasaEfectivaMensual) {
    let cuotaMensual = valorPrestamo / ((1 - (1 + tasaEfectivaMensual)** (periodo * -1)) / tasaEfectivaMensual)
    return cuotaMensual;
}

    // function calcularPrecioConDescuento (precio, descuento) {
    //     const porcentajePrecioConDescuento = 100 - descuento;
    //     const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    //    return precioConDescuento;
    // }


function onClickButtonCalcularCuotaMensual(){
    const inputLoan = document.getElementById("InputLoan");
    const loanValue = Number(inputLoan.value);
    const inputRate = document.getElementById("InputRate");
    const rateValue = Number(inputRate.value);
    const inputTerm = document.getElementById("InputTerm");
    const termValue = Number(inputTerm.value);

    const monthRateValue = calcularTasaEfectivaMensual(rateValue);

    const valorCuotaMensual = calcularCuotaMensual(loanValue, termValue, monthRateValue);
    const resultRate = document.getElementById("ResultRate");
    const resultShare = document.getElementById("ResultShare");

    resultRate.innerText = "La tasa mensual a aplicar es: " + (monthRateValue * 100).toFixed(4) + "%";
    resultShare.innerText = "La cuota mensual a pagar es de: $" + valorCuotaMensual.toFixed(2);
}