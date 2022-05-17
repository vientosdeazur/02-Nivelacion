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


const getEmpleadoByID = (id,callback) => {
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

const getSueldoByID = (id , callback) => {

   let sueldo = sueldos.find( (s) => s.id === id); // Busca en el array por valor ID hasta matchear y devuelve el array al objeto empleado

        //Hasta aca va todo bien ERROR: CALLBACK NO ES UNA FUNCION
       if (sueldo.cobra){
            callback (sueldo); // Verifica que haya devuelto un valor distino de undefined    
        } else {
            
            sueldo = {
                id : id,
                cobra: 0
            }
            callback (sueldo);
        }
    }

const id = 3;

getEmpleadoByID (id, (empleado) => {


    if (empleado.nombre === 'Inexistente' ) {

        console.log (`Empleado ${empleado.nombre}`);

    } else {

        sueldo = getSueldoByID (id,(sueldo) =>
        
        console.log (`Empleado ${empleado.nombre} gana un total de: ${sueldo.cobra}`)

        ); // Se rompe aca cuando llama la funcion

   
    }

    
}

)


