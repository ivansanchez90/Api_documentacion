import { Router } from 'express'
import { getQuienEntrega, createQuienEntrega, updateQuienEntrega, deleteQuienEntrega, getQuienEntregaId } from '../controllers/quienEntrega.controller.js'


const router = Router()

router.get('/quienentrega', getQuienEntrega)

router.get('/quienentrega/:id', getQuienEntregaId)

router.post('/quienentrega', createQuienEntrega)

router.patch('/quienentrega/:id', updateQuienEntrega)

router.delete('/quienentrega/:id', deleteQuienEntrega)

export default router