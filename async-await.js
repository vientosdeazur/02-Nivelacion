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
       
    } catch (error) {
        throw error;
    }
        
}


const id = 2;

const getDataEmpleado = async (id) => {

    const empleado = await getEmpleadoByID(id); // Await tiene que estar si o si dentro de una funcion asincrona
    const sueldo = await getSueldoByID (id);
    console.log (`Empleado ${empleado.nombre} cobra ${sueldo.cobra}`);

}


getDataEmpleado (id);
