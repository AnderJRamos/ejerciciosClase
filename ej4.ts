type OperacionMatematica = (valor: number) => number;
function calcular(numero: number, operacion: OperacionMatematica): number {
  return operacion(numero);
}

const calcularCuadrado: OperacionMatematica = (n: number): number => n * n;


const calcularRaizCuadrada: OperacionMatematica = (n: number): number => Math.sqrt(n);
const numeroEntrada = 16;                //calcular raiz cuadrada de un numero (Math.sqrt(n))
const resultadoCuadrado = calcular(numeroEntrada, calcularCuadrado);
console.log(`El cuadrado de ${numeroEntrada} es: ${resultadoCuadrado}`);

const resultadoRaiz = calcular(numeroEntrada, calcularRaizCuadrada);
console.log(`La raíz cuadrada de ${numeroEntrada} es: ${resultadoRaiz}`);
