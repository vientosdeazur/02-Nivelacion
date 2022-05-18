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

// Funcion async devuelve una promesa

const getEmpleadoByID = async (id) => {
    
    try{
        const empleado = empleados.find( (e) => e.id === id);
        if (empleado){
            return empleado;
        } 
        throw new Error ('Empleado Inexistente');
    }catch (error) {
        throw error;
        }
};

const getSueldoByID = async (id) => {

    try{
        const sueldo = sueldos.find( (s) => s.id === id); 
        if (sueldo){
            return sueldo;
           } 
        throw new Error ('0');   
       
    } catch (error) {
        throw error;
    }
        
}


const id = 2;

const getDataEmpleado = async (id) => {

    try {
    const empleado = await getEmpleadoByID(id); // Await tiene que estar si o si dentro de una funcion asincrona
        try { 
            const sueldo = await getSueldoByID (id);
            return {
                id,
                nombre: empleado.nombre,
                sueldo: sueldo.cobra
            };    

        } catch (error){
            return {
                id,
                nombre: empleado.nombre,
                sueldo: 0
            }
        }
        
        // Se mergearon las dos DB simuladas y se devolvio un objeto para ser manipulado luego

    } catch (error) {
        throw error;
    }
    
}


getDataEmpleado (id)
    .then (datos => console.log (`Empleado ${datos.nombre} cobra ${datos.sueldo}`))
    .catch (err => console.log (err.message));
