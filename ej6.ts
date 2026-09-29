function duplicarNumero(numero: number): void {
  numero = numero * 2;
  console.log("Dentro de la función duplicar:", numero);
}

function cambiarPrecio(libro: { titulo: string; precio: number }, nuevoPrecio: number): void {
  libro.precio = nuevoPrecio;
  console.log("Dentro de la función cambiar precio:", libro.precio);
}

let miNumero = 10;
let miLibro = {
  titulo: "Cien años de soledad",
  precio: 25
};

console.log("--- PRUEBA 1: NÚMERO ---");
console.log("Número antes:", miNumero);
duplicarNumero(miNumero);

console.log("Número después:", miNumero);
console.log("\n--- PRUEBA 2: OBJETO ---");
console.log("Precio antes:", miLibro.precio);

cambiarPrecio(miLibro, 40);
console.log("Precio después:", miLibro.precio);