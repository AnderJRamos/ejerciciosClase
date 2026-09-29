function Sumar(numero: number): number {
  if (numero === 0) return 0; 
  return numero + Sumar(numero - 1); 
}
