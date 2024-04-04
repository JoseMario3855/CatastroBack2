// controllers/lc_categoriasuelotipoController.js
const db = require('../../../models/lc_categoriasuelotipo');
const lc_categoriasuelotipo = db.lc_categoriasuelotipo;

//Obtener todos los registros de lc_categoriasuelotipo
exports.getAlllc_categoriasuelotipo = async (req, res) => {
    try {
        const data = await lc_categoriasuelotipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_categoriasuelotipo
exports.lc_categoriasuelotipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_categoriasuelotipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_categoriasuelotipo por ID
exports.lc_categoriasuelotipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_categoriasuelotipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_categoriasuelotipo por ID
exports.lc_categoriasuelotipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_categoriasuelotipo.findByPk(id);
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

// Eliminar un registro de lc_categoriasuelotipo por ID
exports.lc_categoriasuelotipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_categoriasuelotipo.findByPk(id);
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
