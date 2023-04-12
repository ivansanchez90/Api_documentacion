import { Router } from 'express'
import { getDocumento, createDocumento, getDocumentoId, deleteDocumento } from '../controllers/documento.controller.js'


const router = Router()

router.get('/documento', getDocumento)

router.get('/documento/:id', getDocumentoId)

router.post('/documento', createDocumento)

router.delete('/documento/:id', deleteDocumento)

export default router