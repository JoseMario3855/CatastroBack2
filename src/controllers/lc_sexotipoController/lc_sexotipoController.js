// controllers/lc_sexotipoController.js
const db = require('../../../models/lc_sexotipo');
const lc_sexotipo = db.lc_sexotipo;

//Obtener todos los registros de lc_sexotipo
exports.getAlllc_sexotipo = async (req, res) => {
    try {
        const data = await lc_sexotipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_sexotipo
exports.lc_sexotipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_sexotipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_sexotipo por ID
exports.lc_sexotipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_sexotipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_sexotipo por ID
exports.lc_sexotipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_sexotipo.findByPk(id);
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

// Eliminar un registro de lc_sexotipo por ID
exports.lc_sexotipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_sexotipo.findByPk(id);
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
