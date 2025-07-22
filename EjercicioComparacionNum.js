// solicitar 3 numeros al usuario
let num1 = Number(prompt("ingresa el primer numero:"));
let num2 = Number(prompt("ingresa el segundo numero:"));
let num3 = Number(prompt("ingresa el tercer numero:"));

const resultadoDiv = document.getElementById('resultado');

// funcion para validar si los valores son numeros
function validarNumeros(n1, n2, n3) {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        const mensaje = "error: por favor, ingresa solo numeros.";
        console.error(mensaje);
        resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
        return false;
    }
    return true;
}

// funcion para comparar y ordenar los numeros
function compararNumeros(n1, n2, n3) {
    if (!validarNumeros(n1, n2, n3)) {
        return;
    }

    // identificar si los numeros son iguales
    if (n1 === n2 && n2 === n3) {
        const mensaje = "los tres numeros son iguales.";
        console.log(mensaje);
        resultadoDiv.innerHTML = `<p>${mensaje}</p><p>${n1}, ${n2}, ${n3}</p>`;
        return;
    }

    let numeros = [n1, n2, n3];
    let mayor, centro, menor;

    // ordenar de mayor a menor
    numeros.sort((a, b) => b - a);
    [mayor, centro, menor] = numeros;

    const ordenMayorMenor = `${mayor}, ${centro}, ${menor}`;
    console.log("orden de mayor a menor:");
    console.log(ordenMayorMenor);

    // ordenar de menor a mayor
    numeros.sort((a, b) => a - b);
    [menor, centro, mayor] = numeros;
    
    const ordenMenorMayor = `${menor}, ${centro}, ${mayor}`;
    console.log("orden de menor a mayor:");
    console.log(ordenMenorMayor);

    // imprimir en el dom
    resultadoDiv.innerHTML = `
        <h2>resultados</h2>
        <p><strong>numeros ingresados:</strong> ${n1}, ${n2}, ${n3}</p>
        <p><strong>orden de mayor a menor:</strong> ${ordenMayorMenor}</p>
        <p><strong>orden de menor a mayor:</strong> ${ordenMenorMayor}</p>
    `;
}

// ejecutar la funcion de comparacion
compararNumeros(num1, num2, num3);