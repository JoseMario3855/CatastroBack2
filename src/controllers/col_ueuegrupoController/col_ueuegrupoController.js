// controllers/col_ueuegrupoController.js
const db = require('../../../models/col_ueuegrupo');
const col_ueuegrupo = db.col_ueuegrupo;

//Obtener todos los registros de col_ueuegrupo
exports.getAllcol_ueuegrupo = async (req, res) => {
    try {
        const data = await col_ueuegrupo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en col_ueuegrupo
exports.col_ueuegrupocreate = async (req, res) => {
    try {
        const nuevoRegistro = await col_ueuegrupo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de col_ueuegrupo por ID
exports.col_ueuegrupogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_ueuegrupo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de col_ueuegrupo por ID
exports.col_ueuegrupoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await col_ueuegrupo.findByPk(id);
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

// Eliminar un registro de col_ueuegrupo por ID
exports.col_ueuegrupodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_ueuegrupo.findByPk(id);
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
