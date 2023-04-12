import { Router } from 'express'
import { getTipoDocumento, getTipoDocumentoId, createTipoDocumento, updateTipoDocumento, deleteTipoDocumento } from '../controllers/tipoDocumento.controller.js'


const router = Router()

router.get('/tipodocumento', getTipoDocumento)

router.get('/tipodocumento/:id', getTipoDocumentoId)

router.post('/tipodocumento', createTipoDocumento)

router.patch('/tipodocumento/:id', updateTipoDocumento)

router.delete('/tipodocumento/:id', deleteTipoDocumento)

export default router