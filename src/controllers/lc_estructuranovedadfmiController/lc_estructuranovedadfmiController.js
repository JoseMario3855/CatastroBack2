// controllers/lc_estructuranovedadfmiController.js
const db = require('../../../models/lc_estructuranovedadfmi');
const lc_estructuranovedadfmi = db.lc_estructuranovedadfmi;

//Obtener todos los registros de lc_estructuranovedadfmi
exports.getAlllc_estructuranovedadfmi = async (req, res) => {
    try {
        const data = await lc_estructuranovedadfmi.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_estructuranovedadfmi
exports.lc_estructuranovedadfmicreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_estructuranovedadfmi.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_estructuranovedadfmi por ID
exports.lc_estructuranovedadfmigetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_estructuranovedadfmi.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_estructuranovedadfmi por ID
exports.lc_estructuranovedadfmiupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_estructuranovedadfmi.findByPk(id);
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

// Eliminar un registro de lc_estructuranovedadfmi por ID
exports.lc_estructuranovedadfmideleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_estructuranovedadfmi.findByPk(id);
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
