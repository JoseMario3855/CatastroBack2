// controllers/lc_fotoidentificaciontipoController.js
const db = require('../../../models/lc_fotoidentificaciontipo');
const lc_fotoidentificaciontipo = db.lc_fotoidentificaciontipo;

//Obtener todos los registros de lc_fotoidentificaciontipo
exports.getAlllc_fotoidentificaciontipo = async (req, res) => {
    try {
        const data = await lc_fotoidentificaciontipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_fotoidentificaciontipo
exports.lc_fotoidentificaciontipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_fotoidentificaciontipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_fotoidentificaciontipo por ID
exports.lc_fotoidentificaciontipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_fotoidentificaciontipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_fotoidentificaciontipo por ID
exports.lc_fotoidentificaciontipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_fotoidentificaciontipo.findByPk(id);
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

// Eliminar un registro de lc_fotoidentificaciontipo por ID
exports.lc_fotoidentificaciontipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_fotoidentificaciontipo.findByPk(id);
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
