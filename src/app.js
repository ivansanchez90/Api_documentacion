import express from 'express'
import documentosRoutes from './routes/documentos.routes.js'
import indexRoutes from './routes/index.routes.js'
import quienEntrega from './routes/quienEntrega.routes.js'


const app = express()

app.use(express.json())

app.use('/api', indexRoutes)
app.use('/api', documentosRoutes)
app.use('/api', quienEntrega)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint Not Found"
    })
})

export default app