// controllers/col_cifuenteController.js
const db = require('../../../models/col_contenidoniveltipo');
const col_contenidoniveltipoController = db.col_contenidoniveltipo;

//Obtener todos los registros de col_contenidoniveltipo
exports.getAllcol_contenidoniveltipo = async (req, res) => {
    try {
        const data = await col_contenidoniveltipoController.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en col_contenidoniveltipo
exports.createcol_contenidoniveltipo = async (req, res) => {
    try {
        const nuevoRegistro = await col_contenidoniveltipoController.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de col_contenidoniveltipo por ID
exports.col_contenidoniveltipoById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_contenidoniveltipoController.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de col_cifuente por ID
exports.ACcol_contenidoniveltipoById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await col_contenidoniveltipoController.findByPk(id);
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

// Eliminar un registro de col_contenidoniveltipo por ID
exports.col_contenidoniveltipoById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_contenidoniveltipoController.findByPk(id);
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