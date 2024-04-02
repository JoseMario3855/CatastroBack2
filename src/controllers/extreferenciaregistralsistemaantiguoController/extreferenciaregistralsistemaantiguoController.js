// controllers/extreferenciaregistralsistemaantiguoController.js
const db = require('../../../models/extreferenciaregistralsistemaantiguo');
const extreferenciaregistralsistemaantiguo = db.extreferenciaregistralsistemaantiguo;

//Obtener todos los registros de extreferenciaregistralsistemaantiguo
exports.getAllextreferenciaregistralsistemaantiguo = async (req, res) => {
    try {
        const data = await extreferenciaregistralsistemaantiguo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extreferenciaregistralsistemaantiguo
exports.extreferenciaregistralsistemaantiguocreate = async (req, res) => {
    try {
        const nuevoRegistro = await extreferenciaregistralsistemaantiguo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extreferenciaregistralsistemaantiguo por ID
exports.extreferenciaregistralsistemaantiguogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extreferenciaregistralsistemaantiguo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extreferenciaregistralsistemaantiguo por ID
exports.extreferenciaregistralsistemaantiguoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extreferenciaregistralsistemaantiguo.findByPk(id);
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

// Eliminar un registro de extreferenciaregistralsistemaantiguo por ID
exports.extreferenciaregistralsistemaantiguodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extreferenciaregistralsistemaantiguo.findByPk(id);
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
