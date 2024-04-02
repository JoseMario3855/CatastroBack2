// controllers/col_metodoproducciontipoController.js
const db = require('../../../models/col_metodoproducciontipo');
const col_metodoproducciontipo = db.col_metodoproducciontipo;

//Obtener todos los registros de col_metodoproducciontipo
exports.getAllcol_metodoproducciontipo = async (req, res) => {
    try {
        const data = await col_metodoproducciontipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en col_metodoproducciontipo
exports.col_metodoproducciontipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await col_metodoproducciontipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de col_metodoproducciontipo por ID
exports.col_metodoproducciontipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_metodoproducciontipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de col_metodoproducciontipo por ID
exports.col_metodoproducciontipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await col_metodoproducciontipo.findByPk(id);
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

// Eliminar un registro de col_metodoproducciontipo por ID
exports.col_metodoproducciontipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_metodoproducciontipo.findByPk(id);
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
