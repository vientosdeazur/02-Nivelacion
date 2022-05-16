const nombre = 'Juan';
const apellido = 'Valdez';
const nombrecompleto = nombre + ' ' + apellido; // Sin usar template string

const nombrecompleto2 = `${nombre} ${apellido}`; // Usando template string (forma correcta)

console.log(nombrecompleto);
console.log(nombrecompleto2);

console.log (nombrecompleto === nombrecompleto2); // El valor es el mismo pero se construyen de diferentes maneras ( una usando la funcionalidad TEMPLATE STRING de JS)