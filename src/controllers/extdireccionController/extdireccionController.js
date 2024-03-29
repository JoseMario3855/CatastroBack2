// controllers/extdireccionController.js
const db = require('../../../models/extdireccion');
const extdireccion = db.extdireccion;

// Obtener todos los registros de extdireccion
exports.getAllextdireccion = async (req, res) => {
    try {
        const data = await extdireccion.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extdireccion
exports.createextdireccion = async (req, res) => {
    try {
        const nuevoRegistro = await extdireccion.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extdireccion por ID
exports.extdirecciongetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extdireccion por ID
exports.extdireccionupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extdireccion.findByPk(id);
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

// Eliminar un registro de extdireccion por ID
exports.extdireccionldeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion.findByPk(id);
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
