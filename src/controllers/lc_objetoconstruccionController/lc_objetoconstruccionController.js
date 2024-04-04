// controllers/lc_objetoconstruccionController.js
const db = require('../../../models/lc_objetoconstruccion');
const lc_objetoconstruccion = db.lc_objetoconstruccion;

//Obtener todos los registros de lc_objetoconstruccion
exports.getAlllc_objetoconstruccion = async (req, res) => {
    try {
        const data = await lc_objetoconstruccion.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_objetoconstruccion
exports.lc_objetoconstruccioncreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_objetoconstruccion.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_objetoconstruccion por ID
exports.lc_objetoconstrucciongetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_objetoconstruccion.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_objetoconstruccion por ID
exports.lc_objetoconstruccionupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_objetoconstruccion.findByPk(id);
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

// Eliminar un registro de lc_objetoconstruccion por ID
exports.lc_objetoconstrucciondeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_objetoconstruccion.findByPk(id);
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
