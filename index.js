const express= require("express")
const cors= require("cors")
const mysql= require("mysql")
//require('dotenv').config();



//use express
const app= express()
const PORT= 3000;


//middlewares
app.use(cors())
app.use(express.json())



app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
});


const connection= mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    port: process.env.BD_PORT,
    database: process.env.BD_DATABASE
    
})

connection.connect((err)=>{
    if(err){
        console.error(err.message || "Error al conectar con la BD")
    }else{
        console.log("Coneccion exitosa en la BD")
    }
})
/* --> Use for test connect to bd
connection.query('SELECT 1 + 1 AS solution', (err, result)=>{
    if(err) console.log(err.message || 'no se puedo solucionar')
    console.log("El resultado se la solucion es: " + result[0].solution)
})
*/

app.get("/", (req, res)=>{
    connection.query('SELECT * FROM Usuarios', (error, results)=>{
        if(error)
            res.status(500).json({
                message: error.message || 'No se pueden obtener los datos en este momento'
            })
            
        res.status(200).json(results)
    })
})

app.post('/', (req, res)=>{
    const { nombre } = req.body;

    if(!nombre)
        return res.status(400).json({
            message: 'El campo nombre es requerido'
        })
    if(typeof nombre !== 'string')
        return res.status(400).json({
            message: 'El campo nombre debe ser de tipo string'
        })
    if(nombre.length > 50)
        return res.status(400).json({
            message: 'El campo nombre debe tener una longitud maxima de 50 caracteres'
        })
    if(nombre.length < 3)
        return res.status(400).json({
            message: 'El campo nombre debe tener una longitud minima de 3 caracteres'
        })
    if(nombre.trim().length === 0)
        return res.status(400).json({
            message: 'El campo nombre no debe contener solo espacios en blanco'
        })
    connection.query(`INSERT INTO Usuarios VALUES (DEFAULT, ?);`,[nombre], 
    (err, result)=>{
        if(err) 
            res.status(500).json({
            message: err.message || 'No se puedo hacer la insercion de datos'
        });
        res.status(200).json({
            message: 'Datos insertados correctamente en la BD',
            data: result
        })
    })
})

app.patch('/', (req, res)=>{
    const { id, nombre } = req.body;
    if(!id || !nombre)
        return res.status(400).json({
            message: 'Los campos id y nombre son requeridos'
        })
    if(typeof id !== 'number')
        return res.status(400).json({
            message: 'El campo id debe ser de tipo number'
        })
    if(typeof nombre !== 'string')
        return res.status(400).json({
            message: 'El campo nombre debe ser de tipo string'
        })
    if(nombre.length > 50)
        return res.status(400).json({
            message: 'El campo nombre debe tener una longitud maxima de 50 caracteres'
        })
    if(nombre.length < 3)
        return res.status(400).json({
            message: 'El campo nombre debe tener una longitud minima de 3 caracteres'
        })
    if(nombre.trim().length === 0)
        return res.status(400).json({
            message: 'El campo nombre no debe contener solo espacios en blanco'
        })
    
    connection.query(`UPDATE Usuarios SET nombre = ? WHERE id = ?`, [nombre, id], 
    (err, result)=>{
        if(err) 
            res.status(500).json({
            message: err.message || 'No se puedo hacer la actualizacion de datos'
        });
        res.status(200).json({
            message: 'Datos actualizados correctamente en la BD',
            data: result
        })
    })
});

app.delete('/', (req, res)=>{
    const { id } = req.body;
    if(!id)
        return res.status(400).json({
            message: 'El campo id es requerido'
        })
    if(typeof id !== 'number')
        return res.status(400).json({
            message: 'El campo id debe ser de tipo number'
        })
    connection.query(`DELETE FROM Usuarios WHERE id = ?`, [id], 
    (err, result)=>{
        if(err) 
            res.status(500).json({
            message: err.message || 'No se puedo hacer la eliminacion de datos'
        });
        res.status(200).json({
            message: 'Datos eliminados correctamente en la BD',
            data: result
        })
    })
});
