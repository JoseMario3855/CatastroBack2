// controllers/ini_predioinsumosController.js
const db = require('../../../models/ini_predioinsumos');
const ini_predioinsumos = db.ini_predioinsumos;

//Obtener todos los registros de ini_predioinsumos
exports.getAllini_predioinsumos = async (req, res) => {
    try {
        const data = await ini_predioinsumos.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en ini_predioinsumos
exports.ini_predioinsumoscreate = async (req, res) => {
    try {
        const nuevoRegistro = await ini_predioinsumos.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de ini_predioinsumos por ID
exports.ini_predioinsumosgetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await ini_predioinsumos.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de ini_predioinsumos por ID
exports.ini_predioinsumosupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await ini_predioinsumos.findByPk(id);
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

// Eliminar un registro de ini_predioinsumos por ID
exports.ini_predioinsumosdeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await ini_predioinsumos.findByPk(id);
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
