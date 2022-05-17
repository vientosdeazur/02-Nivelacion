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


const id = 3;

const getDataEmpleado = async (id) => {

    try {
    const empleado = await getEmpleadoByID(id); // Await tiene que estar si o si dentro de una funcion asincrona
        try { 
            const sueldo = await getSueldoByID (id);
            return `Empleado ${empleado.nombre} cobra ${sueldo.cobra}` ;    
        } catch (error){
            return `Empleado ${empleado.nombre} cobra ` + error.message;
        }
            
    } catch (error) {
        throw error;
    }
    
}


getDataEmpleado (id)
    .then (mensaje => console.log (mensaje))
    .catch (err => console.log (err.message));
