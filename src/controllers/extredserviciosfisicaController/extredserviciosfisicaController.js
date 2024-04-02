// controllers/extredserviciosfisicaController.js
const db = require('../../../models/extredserviciosfisica');
const extredserviciosfisica = db.extredserviciosfisica;

//Obtener todos los registros de extredserviciosfisica
exports.getAllextredserviciosfisica = async (req, res) => {
    try {
        const data = await extredserviciosfisica.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extredserviciosfisica
exports.extredserviciosfisicacreate = async (req, res) => {
    try {
        const nuevoRegistro = await extredserviciosfisica.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extredserviciosfisica por ID
exports.extredserviciosfisicagetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extredserviciosfisica.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extredserviciosfisica por ID
exports.extredserviciosfisicaupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extredserviciosfisica.findByPk(id);
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

// Eliminar un registro de extredserviciosfisica por ID
exports.extredserviciosfisicadeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extredserviciosfisica.findByPk(id);
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
