/*** Realizar operaciones con dos números.
Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
números, calcular lo siguiente 
 */

// Pedir mediante un prompt 2 valores
let num1 = parseInt(prompt("Ingresa el primer numero (Mayor a 0)"));
let num2 = parseInt(prompt("Ingresa el segundo numero (Mayor a 0)"));

// Crear una condicional y si num1 y num2 son mayores que 0 entonces hacer las operaciones:
if (num1 > 0 && num2 > 0) {
  //Sumar num1 y num2 y mostrar resultado
  document.write(`La suma de ${num1} + ${num2} es: ${num1 + num2}<br>`);
  //Restar num1 y num2 y mostrar resultado
  document.write(`La resta de ${num1} - ${num2} es: ${num1 - num2}<br>`);
  //Dividir num1 y num2 y mostrar resultado
  document.write(
    `La division de ${num1} / ${num2} es: ${(num1 / num2).toFixed(1)}<br>`
  );
  //Multiplicar num1 y num2 y mostrar resultado
  document.write(
    `La multiplicación de ${num1} * ${num2} es: ${num1 * num2}<br>`
  );
  //Mostrar el resto de num1 y num2:
  document.write(`El modulo de ${num1} % ${num2} es: ${num1 % num2}`);
  // Si no se cumple la condición mostrar:
} else {
  document.write("No puedo hacer esta operación po!");
}
