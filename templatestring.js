const nombre = 'Juan';
const apellido = 'Valdez';
const nombrecompleto = nombre + ' ' + apellido; // Sin usar template string

const nombrecompleto2 = `${nombre} ${apellido}`; // Usando template string (forma correcta)

console.log(nombrecompleto);
console.log(nombrecompleto2);