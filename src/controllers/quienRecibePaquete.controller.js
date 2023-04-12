import { pool } from "../db.js"


export const getQuienRecibePaquete = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM quienrecibepaquete')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const getQuienRecibePaqueteId = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM quienrecibepaquete where quienRecibePaqueteId = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No existe quienRecibePaquete con ese ID'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createQuienRecibePaquete = async (req, res) => {
    try {
        const { fecha, hora, quienRecibeId, paqueteId } = req.body
        const [rows] = await pool.query('INSERT INTO quienrecibepaquete (fecha, hora, quienRecibeId, paqueteId) VALUES (?, ?)', [fecha, hora, quienRecibeId, paqueteId,])
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

export const updateQuienRecibePaquete = async (req, res) => {
    try {
        const { id } = req.params
        const { fecha, hora, quienRecibeId, paqueteId } = req.body
        const [result] = await pool.query('UPDATE quienrecibepaquete SET fecha = IFNULL(?,fecha), hora = IFNULL(?,hora), quienRecibeId = IFNULL(?,quienRecibeId), paqueteId = IFNULL(?,paqueteId) WHERE quienRecibePaqueteId = ?', [fecha, hora, quienRecibeId, paqueteId, id])
        if (result.affectedRows <= 0) return send.status(404).json({
            message: 'No existe quienRecibePaquete con ese ID'
        })
        const [rows] = await pool.query('SELECT * FROM quienrecibepaquete WHERE quienRecibePaqueteId = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const deleteQuienRecibePaquete = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM quienrecibepaquete WHERE quienRecibePaqueteId = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No existe quienRecibePaquete con ese ID'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}