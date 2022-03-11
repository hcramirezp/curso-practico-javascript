//Programa para calcular el descuento de un producto y elvalor que debe pagar el cliente

let coupons = [
    {name: "Happy Days", discount: 10},
    {name: "First Time", discount: 20},
    {name: "Loyalty Bonus", discount: 30},
    {name: "Premium Client", discount:40}
]

function calcularPrecioConDescuento (precio, descuento) {
        const porcentajePrecioConDescuento = 100 - descuento;
        const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
        return precioConDescuento;
    }

    function onClickButtonPriceDiscount(){
        const inputPrice = document.getElementById("InputPrice");
        const priceValue = Number(inputPrice.value);
        const inputCoupon = document.getElementById("InputCoupon");
        const couponValue = inputCoupon.value;


        const isCouponValueValid = function(coupon) {
            return coupon.name === couponValue;
        };

        const userCoupon = coupons.find(isCouponValueValid);

        if(!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
        } else {
            const descuento = userCoupon.discount;
            const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

            const resultPrice = document.getElementById("ResultP");
            resultPrice.innerText = "El valor a pagar es de: $" + precioConDescuento;
        }

    }