// controllers/extinteresadoController.js
const db = require('../../../models/extinteresado');
const extinteresado = db.extinteresado;

//Obtener todos los registros de extinteresado
exports.getAllextinteresado = async (req, res) => {
    try {
        const data = await extinteresado.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extinteresado
exports.extinteresadocreate = async (req, res) => {
    try {
        const nuevoRegistro = await extinteresado.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extinteresado por ID
exports.extinteresadogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extinteresado.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extinteresado por ID
exports.extinteresadoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extinteresado.findByPk(id);
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

// Eliminar un registro de extinteresado por ID
exports.extinteresadodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extinteresado.findByPk(id);
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
