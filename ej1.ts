function saludo (nombre:string, apellido?:string): string {

if (apellido !== undefined)
{
return `Bienvenido, a la universidad de Oriente ${nombre} ${apellido}`
} else {
    return `Bienvenido, a la universidad de Oriente ${nombre}`
}

}

console.log(saludo("Karla"));
console.log(saludo("Karla", "Cruz"));