// controllers/lc_condicionprediotipoController.js
const db = require('../../../models/lc_condicionprediotipo');
const lc_condicionprediotipo = db.lc_condicionprediotipo;

//Obtener todos los registros de lc_condicionprediotipo
exports.getAlllc_condicionprediotipo = async (req, res) => {
    try {
        const data = await lc_condicionprediotipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_condicionprediotipo
exports.lc_condicionprediotipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_condicionprediotipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_condicionprediotipo por ID
exports.lc_condicionprediotipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_condicionprediotipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_condicionprediotipo por ID
exports.lc_condicionprediotipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_condicionprediotipo.findByPk(id);
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

// Eliminar un registro de lc_condicionprediotipo por ID
exports.lc_condicionprediotipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_condicionprediotipo.findByPk(id);
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
