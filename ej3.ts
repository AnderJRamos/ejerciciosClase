function sumacalificaciones(...suma:number[]): number {
    if (suma.length===0){
        return 0
    } else {
        return suma.reduce((acumulador, sumaactual)=> acumulador+sumaactual,0)
        // el atributo reduce sirve para sumar todos los datos de un array
        //usa un acumulador para ir sumando, y un parametro para ir tomando valores nuevos
        //como su nombre lo dice, reduce el codigo 
    }
}

console.log(sumacalificaciones(9.5,8.2,6.7));
console.log(sumacalificaciones(0))