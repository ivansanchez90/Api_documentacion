import { pool } from "../db.js"


export const getQuienEntrega = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM quienentrega')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const getQuienEntregaId = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM quienentrega where quienEntregaid = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No existe quienEntrega con ese ID'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createQuienEntrega = async (req, res) => {
    try {
        const { nombre, correo } = req.body
        const [rows] = await pool.query('INSERT INTO quienentrega (nombre, correo) VALUES (?, ?)', [nombre, correo])
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

export const updateQuienEntrega = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, correo } = req.body
        const [result] = await pool.query('UPDATE quienentrega SET nombre = IFNULL(?,nombre), correo = IFNULL(?,correo) WHERE quienEntregaid = ?', [nombre, correo, id])
        if (result.affectedRows <= 0) return send.status(404).json({
            message: 'No existe quienEntrega con ese ID'
        })
        const [rows] = await pool.query('SELECT * FROM quienentrega WHERE quienEntregaid = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const deleteQuienEntrega = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM quienentrega WHERE quienEntregaid = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No existe quienEntrega con ese ID'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}