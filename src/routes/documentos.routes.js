import { Router } from 'express'
import { getDocumentacion, createDocumentacion, updateDocumentacion, deleteDocumentacion } from '../controllers/documentos.controller.js'

const router = Router()

router.get('/documentos', getDocumentacion)

router.post('/documentos', createDocumentacion)

router.put('/documentos', updateDocumentacion)

router.delete('/documentos', deleteDocumentacion)

export default router