import { pool } from "../db.js"


export const getQuienEntregaPaquete = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM quienentregapaquete')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const getQuienEntregaPaqueteId = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM quienentregapaquete where quienEntregaPaqueteId  = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No existe quienEntregaPaquete con ese ID'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createQuienEntregaPaquete = async (req, res) => {
    try {
        const { fecha, hora, quienEntregaId, paqueteId } = req.body
        const [rows] = await pool.query('INSERT INTO quienentregapaquete (fecha, hora, quienEntregaId, paqueteId) VALUES (?, ?)', [fecha, hora, quienEntregaId, paqueteId,])
        res.send({
            id: rows.insertId,
            nombre,
            correo
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const updateQuienEntregaPaquete = async (req, res) => {
    try {
        const { id } = req.params
        const { fecha, hora, quienEntregaId, paqueteId } = req.body
        const [result] = await pool.query('UPDATE quienentregapaquete SET fecha = IFNULL(?,fecha), hora = IFNULL(?,hora), quienEntregaId = IFNULL(?,quienEntregaId), paqueteId = IFNULL(?,paqueteId) WHERE quienEntregaid = ?', [fecha, hora, quienEntregaId, paqueteId, id])
        if (result.affectedRows <= 0) return send.status(404).json({
            message: 'No existe quienEntrega con ese ID'
        })
        const [rows] = await pool.query('SELECT * FROM quienentregapaquete WHERE quienEntregaPaqueteId  = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const deleteQuienEntregaPaquete = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM quienentregapaquete WHERE quienEntregaPaqueteId  = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No existe quienEntregaPaquete con ese ID'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}