// controllers/lc_puntolevantamientoController.js
const db = require('../../../models/lc_puntolevantamiento');
const lc_puntolevantamiento = db.lc_puntolevantamiento;

//Obtener todos los registros de lc_puntolevantamiento
exports.getAlllc_puntolevantamiento = async (req, res) => {
    try {
        const data = await lc_puntolevantamiento.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_puntolevantamiento
exports.lc_puntolevantamientocreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_puntolevantamiento.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_puntolevantamiento por ID
exports.lc_puntolevantamientogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_puntolevantamiento.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_puntolevantamiento por ID
exports.lc_puntolevantamientoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_puntolevantamiento.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await registro.update(body);
        return res.json(registro);
    } catch (error) {
        console.error('Error al actualizar el registro por ID:', error);
        return res.status(500).json({ message: 'Error al actualizar el registro por ID' });
    }
};

// Eliminar un registro de lc_puntolevantamiento por ID
exports.lc_puntolevantamientodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_puntolevantamiento.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await registro.destroy();
        return res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el registro por ID:', error);
        return res.status(500).json({ message: 'Error al eliminar el registro por ID' });
    }
};
