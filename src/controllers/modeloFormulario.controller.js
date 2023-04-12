import { pool } from "../db.js"


export const getModeloFormulario = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM modeloformulario')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const getModeloFormularioId = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM modeloformulario where modeloFormularioId = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No existe modeloFormulario con ese ID'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createModeloFormulario = async (req, res) => {
    try {
        const { tipoDocumentoId, campo } = req.body
        const [rows] = await pool.query('INSERT INTO modeloformulario (tipoDocumentoId,campo) VALUES (?,?)', [tipoDocumentoId, campo])
        res.send({
            id: rows.insertId,
            tipoDocumentoId,
            campo
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const updateModeloFormulario = async (req, res) => {
    try {
        const { id } = req.params
        const { tipoDocumentoId, campo } = req.body
        const [result] = await pool.query('UPDATE modeloformulario SET tipoDocumentoId = IFNULL(?,tipoDocumentoId), campo = IFNULL(?,campo) WHERE campo = ?', [tipoDocumentoId, campo, id])
        if (result.affectedRows <= 0) return send.status(404).json({
            message: 'No existe modeloFormulario con ese ID'
        })
        const [rows] = await pool.query('SELECT * FROM modeloFormulario WHERE modeloFormularioId = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}


export const deleteModeloFormulario = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM modeloFormulario WHERE modeloFormularioId = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No existe modeloFormulario con ese ID'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}