import { pool } from "../db.js"


export const getTipoDocumento = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM tipodocumento')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const getTipoDocumentoId = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM tipodocumento where tipoDocumentoId = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No existe tipoDocumento con ese ID'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createTipoDocumento = async (req, res) => {
    try {
        const { nombre } = req.body
        const [rows] = await pool.query('INSERT INTO tipodocumento (nombre) VALUES (?)', [nombre])
        res.send({
            id: rows.insertId,
            nombre
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const updateTipoDocumento = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre } = req.body
        const [result] = await pool.query('UPDATE tipodocumento SET nombre = IFNULL(?,nombre) WHERE quienEntregaid = ?', [nombre, id])
        if (result.affectedRows <= 0) return send.status(404).json({
            message: 'No existe tipoDocumento con ese ID'
        })
        const [rows] = await pool.query('SELECT * FROM tipodocumento WHERE tipoDocumentoId = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}


export const deleteTipoDocumento = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM tipodocumento WHERE tipoDocumentoId = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No existe tipoDocumento con ese ID'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}