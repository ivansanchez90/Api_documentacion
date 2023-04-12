import express from 'express'
import indexRoutes from './routes/index.routes.js'
import quienEntrega from './routes/quienEntrega.routes.js'
import quienEntregaPaquete from './routes/quienEntregaPaquete.routes.js'
import quienRecibe from './routes/quienRecibe.routes.js'
import quienRecibePaquete from './routes/quienRecibePaquete.routes.js'
import paquete from './routes/paquete.routes.js'
import documento from './routes/documento.routes.js'
import tipoDocumento from './routes/tipoDocumento.routes.js'
import modeloFormulario from './routes/modeloFormulario.routes.js'


const app = express()

app.use(express.json())

app.use('/api', indexRoutes)
app.use('/api', quienEntrega)
app.use('/api', quienEntregaPaquete)
app.use('/api', quienRecibe)
app.use('/api', quienRecibePaquete)
app.use('/api', paquete)
app.use('/api', documento)
app.use('/api', tipoDocumento)
app.use('/api', modeloFormulario)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint Not Found"
    })
})

export default app