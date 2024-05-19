function sumar(sum1, sum2, sum3, sum4)
{
    let resultado;
    resultado = (sum1 + sum2) * (sum3 + sum4);
    if (resultado > 50) {
        return "¡El número es mayor que 50"
    }
    else if (resultado < 50) {
        return "¡El número es menor que 50!"
    }

}

alert(sumar(5, 10, 2, 3));
