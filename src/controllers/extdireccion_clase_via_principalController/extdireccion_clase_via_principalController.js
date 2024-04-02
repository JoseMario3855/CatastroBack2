// controllers/extdireccion_clase_via_principalController.js
const db = require('../../../models/extdireccion_clase_via_principal');
const extdireccion_clase_via_principal = db.extdireccion_clase_via_principal;

//Obtener todos los registros de extdireccion_clase_via_principal
exports.getAllextdireccion_clase_via_principal = async (req, res) => {
    try {
        const data = await extdireccion_clase_via_principal.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extdireccion_clase_via_principal
exports.extdireccion_clase_via_principalcreate = async (req, res) => {
    try {
        const nuevoRegistro = await extdireccion_clase_via_principal.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extdireccion_clase_via_principal por ID
exports.extdireccion_clase_via_principalgetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion_clase_via_principal.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extdireccion_clase_via_principal por ID
exports.extdireccion_clase_via_principalupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extdireccion_clase_via_principal.findByPk(id);
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

// Eliminar un registro de extdireccion_clase_via_principal por ID
exports.extdireccion_clase_via_principaldeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extdireccion_clase_via_principal.findByPk(id);
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
