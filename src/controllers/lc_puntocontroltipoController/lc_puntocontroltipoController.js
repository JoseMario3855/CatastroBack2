// controllers/lc_puntocontroltipoController.js
const db = require('../../../models/lc_puntocontroltipo');
const lc_puntocontroltipo = db.lc_puntocontroltipo;

//Obtener todos los registros de lc_puntocontroltipo
exports.getAlllc_puntocontroltipo = async (req, res) => {
    try {
        const data = await lc_puntocontroltipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_puntocontroltipo
exports.lc_puntocontroltipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_puntocontroltipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_puntocontroltipo por ID
exports.lc_puntocontroltipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_puntocontroltipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_puntocontroltipo por ID
exports.lc_puntocontroltipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_puntocontroltipo.findByPk(id);
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

// Eliminar un registro de lc_puntocontroltipo por ID
exports.lc_puntocontroltipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_puntocontroltipo.findByPk(id);
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
