let nombre = 'Zalogon';
const nombre2 = 'Juan';

if ( true ){

    nombre = 'Joaquin'; // Redefine Variable nombre al no estar definida dentro del scope (Ambito de funcion)

}

console.log(nombre); //imprime Joaquin

if (true) {

    let nombre = 'Zalogon';
    console.log (nombre); // imprime valor variable interna a la funcion (dentro del scope) = Zalogon
}

console.log (nombre); // vuelve a imprimir valor de variable en entorno main con valor modificado = Joaquin

console.log (nombre2); // Imprime valor constante nombre2 = Juan

if (true) {

    const nombre2 = 'Pedro';
    console.log (nombre2);  // Imprime valor de la constante nombre2 definida dentro del scope de la función (Pedro), 
                            // no se puede modificar una constante definida previamente en el metodo main (ERROR)

}
