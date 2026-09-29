function descuento (precio: number, porcentaje:number= 10): number {
    return precio - (precio * (porcentaje / 100));
}

console.log(descuento(100)); 
console.log(descuento(100, 20)); 
console.log(descuento(100, 0)); 