function sumar (a,b){

    return a + b ;

}

// Metodo para definir funciones en desuso

const sumar2 = ( a , b ) => a + b;

//Metodo FLECHA para definir funciones en una linea

console.log (sumar (10,5));
console.log (sumar2 (10,10));

function saludar (nombre) {

    return `Hola ${nombre}`;

}

const saludar2 = (nombre) => `Hola ${nombre}`;

// Idem funcion para TEMPLATE STRINGS

console.log (saludar ('Juan'));
console.log (saludar2 ('Juan Pablo'));
