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

const getEmpleadoByID = (id) => {

    return new Promise ((resolve, reject) => {

        const empleado = empleados.find( (e) => e.id === id);

        if (empleado){
            
            resolve (empleado); // Verifica que haya devuelto un valor distino de undefined
            return;

        }  reject ('Empleado Inexistente')  

    });

}

const getSueldoByID = (id) => {

    return new Promise ((resolve,reject) => {
        const sueldo = sueldos.find( (s) => s.id === id); 
        if (sueldo){
             resolve (sueldo);
             return;
            } 
            reject ('0')
         }
    ) 
}

const id = 2;

    getEmpleadoByID (id).then(empleado => {
        
        getSueldoByID (id).then (sueldo => {

            console.log (`Empleado ${empleado.nombre} gana un total de ${sueldo.cobra}`) ;

        }).catch (err => console.log (`Empleado ${empleado.nombre} gana un total de `+ err)) ;
        
            
    }).catch (err => console.log (err));
        
        
        