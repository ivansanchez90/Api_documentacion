import { Router } from 'express'
import { getQuienRecibePaquete, createQuienRecibePaquete, updateQuienRecibePaquete, deleteQuienRecibePaquete, getQuienRecibePaqueteId } from '../controllers/quienRecibePaquete.controller.js'


const router = Router()

router.get('/quienrecibepaquete', getQuienRecibePaquete)

router.get('/quienrecibepaquete/:id', getQuienRecibePaqueteId)

router.post('/quienrecibepaquete', createQuienRecibePaquete)

router.patch('/quienrecibepaquete/:id', updateQuienRecibePaquete)

router.delete('/quienrecibepaquete/:id', deleteQuienRecibePaquete)

export default router