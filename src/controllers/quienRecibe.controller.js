import { pool } from "../db.js"


export const getQuienRecibe = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM quienrecibe')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const getQuienRecibeId = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM quienrecibe where quienRecibeid = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No existe quienRecibe con ese ID'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createQuienRecibe = async (req, res) => {
    try {
        const { nombre, dni, telefono, correo } = req.body
        const [rows] = await pool.query('INSERT INTO quienrecibe (nombre, dni, telefono, correo) VALUES (?, ?)', [nombre, dni, telefono, correo,])
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

export const updateQuienRecibe = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, dni, telefono, correo } = req.body
        const [result] = await pool.query('UPDATE quienrecibe SET nombre = IFNULL(?,nombre), dni = IFNULL(?,dni), telefono = IFNULL(?,telefono), correo = IFNULL(?,correo) WHERE quienRecibeid = ?', [nombre, dni, telefono, correo, id])
        if (result.affectedRows <= 0) return send.status(404).json({
            message: 'No existe quienRecibe con ese ID'
        })
        const [rows] = await pool.query('SELECT * FROM quienrecibe WHERE quienRecibeid = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const deleteQuienRecibe = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM quienrecibe WHERE quienRecibeid = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No existe quienRecibe con ese ID'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}