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
        sueldo: 5000

    },

    {

        id:2,
        sueldo: 7000
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

const id = 2;

getEmpleadoByID (id, (empleado) => {

    console.log (`Empleado ${empleado.nombre}`);

}


);

