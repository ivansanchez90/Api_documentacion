import { Router } from 'express'
import { getPaquete, createPaquete, getPaqueteId, deletePaquete } from '../controllers/paquete.controller.js'


const router = Router()

router.get('/paquete', getPaquete)

router.get('/paquete/:id', getPaqueteId)

router.post('/paquete', createPaquete)

router.delete('/paquete/:id', deletePaquete)

export default router