import { Router } from 'express'
import { getQuienEntregaPaquete, createQuienEntregaPaquete, updateQuienEntregaPaquete, deleteQuienEntregaPaquete, getQuienEntregaPaqueteId } from '../controllers/quienEntregaPaquete.controller.js'


const router = Router()

router.get('/quienentregapaquete', getQuienEntregaPaquete)

router.get('/quienentregapaquete/:id', getQuienEntregaPaqueteId)

router.post('/quienentregapaquete', createQuienEntregaPaquete)

router.patch('/quienentregapaquete/:id', updateQuienEntregaPaquete)

router.delete('/quienentregapaquete/:id', deleteQuienEntregaPaquete)

export default router