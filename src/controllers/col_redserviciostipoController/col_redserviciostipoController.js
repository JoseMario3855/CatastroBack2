// controllers/col_redserviciostipoController.js
const db = require('../../../models/col_redserviciostipo');
const col_redserviciostipo = db.col_redserviciostipo;

//Obtener todos los registros de col_redserviciostipo
exports.getAllcol_redserviciostipo = async (req, res) => {
    try {
        const data = await col_redserviciostipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en col_redserviciostipo
exports.col_redserviciostipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await col_redserviciostipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de col_redserviciostipo por ID
exports.col_redserviciostipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_redserviciostipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de col_redserviciostipo por ID
exports.col_redserviciostipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await col_redserviciostipo.findByPk(id);
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

// Eliminar un registro de col_redserviciostipo por ID
exports.col_redserviciostipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_redserviciostipo.findByPk(id);
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
