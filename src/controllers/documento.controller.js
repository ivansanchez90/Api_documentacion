import { pool } from "../db.js"


export const getDocumento = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM documento')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const getDocumentoId = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM documento where documentoId = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No existe documento con ese ID'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createDocumento = async (req, res) => {
    try {
        const { paqueteId, tipoDocumentoId } = req.body
        const [rows] = await pool.query('INSERT INTO quienentrega (paqueteId, tipoDocumentoId) VALUES (?, ?)', [paqueteId, tipoDocumentoId])
        res.send({
            id: rows.insertId,
            paqueteId,
            tipoDocumentoId
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const deleteDocumento = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM documento WHERE documentoId = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No existe documento con ese ID'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}