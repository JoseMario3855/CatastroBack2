// controllers/lc_estadociviltipoController.js
const db = require('../../../models/lc_estadociviltipo');
const lc_estadociviltipo = db.lc_estadociviltipo;

//Obtener todos los registros de lc_estadociviltipo
exports.getAlllc_estadociviltipo = async (req, res) => {
    try {
        const data = await lc_estadociviltipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en lc_estadociviltipo
exports.lc_estadociviltipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await lc_estadociviltipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de lc_estadociviltipo por ID
exports.lc_estadociviltipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_estadociviltipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de lc_estadociviltipo por ID
exports.lc_estadociviltipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_estadociviltipo.findByPk(id);
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

// Eliminar un registro de lc_estadociviltipo por ID
exports.lc_estadociviltipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_estadociviltipo.findByPk(id);
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
