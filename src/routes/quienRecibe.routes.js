import { Router } from 'express'
import { getQuienRecibe, createQuienRecibe, updateQuienRecibe, deleteQuienRecibe, getQuienRecibeId } from '../controllers/quienRecibe.controller.js'


const router = Router()

router.get('/quienrecibe', getQuienRecibe)

router.get('/quienrecibe/:id', getQuienRecibeId)

router.post('/quienrecibe', createQuienRecibe)

router.patch('/quienrecibe/:id', updateQuienRecibe)

router.delete('/quienrecibe/:id', deleteQuienRecibe)

export default router