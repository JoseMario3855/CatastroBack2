// controllers/extdireccion_sector_predioController.js
const db = require('../../../models/extdireccion_sector_predio');
const extdireccion_sector_predio = db.extdireccion_sector_predio;

//Obtener todos los registros de extdireccion_sector_predio
exports.getAllextdireccion_sector_predio = async (req, res) => {
    try {
        const data = await extdireccion_sector_predio.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extdireccion_sector_predio
exports.extdireccion_sector_prediocreate = async (req, res) => {
    try {
        const nuevoRegistro = await extdireccion_sector_predio.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extdireccion_sector_predio por ID
exports.extdireccion_sector_prediogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion_sector_predio.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extdireccion_sector_predio por ID
exports.extdireccion_sector_predioupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extdireccion_sector_predio.findByPk(id);
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

// Eliminar un registro de extdireccion_sector_predio por ID
exports.extdireccion_sector_prediodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion_sector_predio.findByPk(id);
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
