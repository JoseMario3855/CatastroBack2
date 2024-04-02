// controllers/extdireccion_tipo_direccionController.js
const db = require('../../../models/extdireccion_tipo_direccion');
const extdireccion_tipo_direccion = db.extdireccion_tipo_direccion;

//Obtener todos los registros de extdireccion_tipo_direccion
exports.getAllextdireccion_tipo_direccion = async (req, res) => {
    try {
        const data = await extdireccion_tipo_direccion.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extdireccion_tipo_direccion
exports.extdireccion_tipo_direccioncreate = async (req, res) => {
    try {
        const nuevoRegistro = await extdireccion_tipo_direccion.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extdireccion_tipo_direccion por ID
exports.extdireccion_tipo_direcciongetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion_tipo_direccion.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extdireccion_tipo_direccion por ID
exports.extdireccion_tipo_direccionupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extdireccion_tipo_direccion.findByPk(id);
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

// Eliminar un registro de extdireccion_tipo_direccion por ID
exports.extdireccion_tipo_direcciondeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion_tipo_direccion.findByPk(id);
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
