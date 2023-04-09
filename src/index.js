import express from 'express'
import documentosRoutes from './routes/documentos.routes.js'
import indexRoutes from './routes/index.routes.js'
import quienEntrega from './routes/quienEntrega.routes.js'

const app = express()
const puerto = 3000

app.use(express.json())

app.use('/api', indexRoutes)
app.use('/api', documentosRoutes)
app.use('/api', quienEntrega)



app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto} `);
})


