let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

let operacion = prompt(
    "Ingrese la operación que desea realizar:\n" +
    "suma\n" +
    "resta\n" +
    "multiplicacion\n" +
    "division"
);

let resultado;

if (operacion == "suma") {

    resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);

} else if (operacion == "resta") {

    resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);

} else if (operacion == "multiplicacion") {

    resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);

} else if (operacion == "division") {

    if (numero2 != 0) {

        resultado = numero1 / numero2;
        alert("El resultado de la división es: " + resultado);

    } else {

        alert("No se puede dividir por cero.");

    }

} else {

    alert("Operación no válida.");

}