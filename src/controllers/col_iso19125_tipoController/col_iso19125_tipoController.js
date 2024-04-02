// controllers/col_iso19125_tipoController.js
const db = require('../../../models/col_iso19125_tipo');
const col_iso19125_tipo = db.col_iso19125_tipo;

//Obtener todos los registros de col_iso19125_tipo
exports.getAllcol_iso19125_tipo = async (req, res) => {
    try {
        const data = await col_iso19125_tipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en col_iso19125_tipo
exports.col_iso19125_tipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await col_iso19125_tipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de col_iso19125_tipo por ID
exports.col_iso19125_tipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_iso19125_tipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de col_iso19125_tipo por ID
exports.col_iso19125_tipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await col_iso19125_tipo.findByPk(id);
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

// Eliminar un registro de col_iso19125_tipo por ID
exports.col_iso19125_tipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_iso19125_tipo.findByPk(id);
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
