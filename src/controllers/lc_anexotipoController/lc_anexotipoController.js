// controllers/lc_anexotipoController.js
const db = require('../../../models/lc_anexotipo');
const lc_anexotipo = db.lc_anexotipo;

//Obtener todos los registros de lc_anexotipo
exports.getAlllc_anexotipo = async (req, res) => {
    try {
        const data = await lc_anexotipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_anexotipo
exports.lc_anexotipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_anexotipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_anexotipo por ID
exports.lc_anexotipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_anexotipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_anexotipo por ID
exports.lc_anexotipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_anexotipo.findByPk(id);
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

// Eliminar un registro de lc_anexotipo por ID
exports.lc_anexotipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_anexotipo.findByPk(id);
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
