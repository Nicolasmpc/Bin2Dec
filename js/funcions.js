var binario = document.getElementById("binario");
binario.addEventListener("keyup", converterBin2Dec, false);

function converterBin2Dec() {
    if (/^[01]+$/.test(binario.value) === false) {
        alert(binario.value + " não é um numero binario");
        binario.value = "";
    } else {
        if (binario.value.length == 8) {
            var decimal = parseInt(binario.value, 2);
            var input_decimal = document.getElementById("decimal");
            input_decimal.setAttribute("value", decimal);
        }
    }
}
