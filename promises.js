const empleados = [

    {
        id: 1 ,
        nombre: 'Juan'
    },

    {
        id: 2 ,
        nombre: 'Pedro'

    },

    {
        id: 3 ,
        nombre: 'Francisco'
    }

]

const sueldos = [

    {
        id:1,
        cobra: 5000

    },

    {

        id:2,
        cobra: 7000
    }
]

/* const getEmpleadoByID = (id,callback) => {

    let empleado = empleados.find( (e) => e.id === id); // Busca en el array por valor ID hasta matchear y devuelve el array al objeto empleado

    if (empleado){
        
        callback (empleado); // Verifica que haya devuelto un valor distino de undefined

    } else {

        empleado = {

            nombre:'Inexistente' // En caso que no se encuentre devuelve Inexistente
            
        }

        callback (empleado);

    }

}

FUNCION CON CALLBACK

*/

const getEmpleadoByID = (id) => {

    return new Promise ((resolve, reject) => {


        let empleado = empleados.find( (e) => e.id === id); // Busca en el array por valor ID hasta matchear y devuelve el array al objeto empleado

        if (empleado){
            
            resolve (empleado); // Verifica que haya devuelto un valor distino de undefined
    
        } else {
    
            reject (
                empleado = {
    
                nombre:'Inexistente' // En caso que no se encuentre devuelve Inexistente
                
            }
            )
        }

    });

}



const id = 4;

getEmpleadoByID (id).then(empleado => {

    console.log (`Empleado ${empleado.nombre}`);


    
}).catch(error => console.log (err));





