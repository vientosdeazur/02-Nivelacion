/* setTimeout (()=> {

console.log ('Hola Mundo')

},2000); */ 

// Un callback es una funcion que se pasa como parametro a otra funcion


/* const saludar = () => {

    console.log ('Hola Mundo');

}

setTimeout (saludar,2000); */

// Callback se le llama a la funcion que va como parametro (Se ejecuta en el futuro)

/* const getUserByID = (id) => {

    const user = {
        id,
        nombre: 'Gonzalo'
    }

    setTimeout (()=>{
        return console.log (user.nombre);
    },1000)



}

getUserByID (10); */


const getUserByID = (id, callback ) => { 
    
    //Esta simulando va a buscar el dato user a otro lado (DB,FILE, ETC)

    const user = {
        id,
        nombre: 'Gonzalo'
    }
    // Objeto que fue devuelto por la DB

    setTimeout (() => callback(user), 1000 ); // Asume va a demorar 1 segundo

}

/* const ImprimirUsuario = (user)=> {

    console.log (user.nombre.toUpperCase()); Manipula los datos
} */

getUserByID(10, ({nombre,id}) => {

    console.log(`Nombre: ${nombre.toUpperCase()} - ID: ${id}`);

}); // Se ejecuta una vez que el Request del Objeto fue resuelto