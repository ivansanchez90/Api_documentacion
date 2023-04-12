import { Router } from 'express'
import { getModeloFormulario, getModeloFormularioId, createModeloFormulario, updateModeloFormulario, deleteModeloFormulario } from '../controllers/modeloFormulario.controller.js'


const router = Router()

router.get('/modeloformulario', getModeloFormulario)

router.get('/modeloformulario/:id', getModeloFormularioId)

router.post('/modeloformulario', createModeloFormulario)

router.patch('/modeloformulario/:id', updateModeloFormulario)

router.delete('/modeloformulario/:id', deleteModeloFormulario)

export default router