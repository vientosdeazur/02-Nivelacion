const personaje = {
    nombre: 'Juan',
    apellido: 'Pablo',
    profesion: 'Papa',

    getDescripcion () {
        return `${nombre} ${apellido} es ${profesion}`
    }
}

/* const nombre = personaje.nombre;
const nombre = personaje.apellido;
const nombre = personaje.profesion;  DESTRUCTURACION*/

/* const {nombre,apellido,profesion} = personaje;
Se puede hacer directamente en una funcion */

const imprimirPersonaje = ({nombre,apellido,profesion}) =>
{

    console.log (nombre,apellido,profesion);

}

imprimirPersonaje (personaje);


const personajes = ['Juan','Francisco','Roma'];

const [p1,p2,p3] = personajes;

//* Desestructuracion usando arrays

console.log (p2,p3);
