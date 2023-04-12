import { pool } from "../db.js"


export const getPaquete = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM paquete')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const getPaqueteId = async (req, res) => {
    try {
        const [rows] = await pool.query('SElECT * FROM paquete where paqueteId = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'No existe paquete con ese ID'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const createPaquete = async (req, res) => {
    try {

        const [rows] = await pool.query('INSERT INTO paquete() VALUES ()')
        res.send({
            id: rows.insertId,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}

export const deletePaquete = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM paquete WHERE paqueteId = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'No existe paquete con ese ID'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo fue mal'
        })
    }
}