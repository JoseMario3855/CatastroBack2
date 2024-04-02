// controllers/extdireccion_sector_ciudadController.js
const db = require('../../../models/extdireccion_sector_ciudad');
const extdireccion_sector_ciudad = db.extdireccion_sector_ciudad;

//Obtener todos los registros de extdireccion_sector_ciudad
exports.getAllextdireccion_sector_ciudad = async (req, res) => {
    try {
        const data = await extdireccion_sector_ciudad.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extdireccion_sector_ciudad
exports.extdireccion_sector_ciudadcreate = async (req, res) => {
    try {
        const nuevoRegistro = await extdireccion_sector_ciudad.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extdireccion_sector_ciudad por ID
exports.extdireccion_sector_ciudadgetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion_sector_ciudad.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extdireccion_sector_ciudad por ID
exports.extdireccion_sector_ciudadupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extdireccion_sector_ciudad.findByPk(id);
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

// Eliminar un registro de extdireccion_sector_ciudad por ID
exports.extdireccion_sector_ciudaddeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion_sector_ciudad.findByPk(id);
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
