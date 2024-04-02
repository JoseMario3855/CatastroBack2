// controllers/extreferenciaregistralsistemaantiguo_tipo_referenciaController.js
const db = require('../../../models/extreferenciaregistralsistemaantiguo_tipo_referencia');
const extreferenciaregistralsistemaantiguo_tipo_referencia = db.extreferenciaregistralsistemaantiguo_tipo_referencia;

//Obtener todos los registros de extreferenciaregistralsistemaantiguo_tipo_referencia
exports.getAllextreferenciaregistralsistemaantiguo_tipo_referencia = async (req, res) => {
    try {
        const data = await extreferenciaregistralsistemaantiguo_tipo_referencia.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en extreferenciaregistralsistemaantiguo_tipo_referencia
exports.extreferenciaregistralsistemaantiguo_tipo_referenciacreate = async (req, res) => {
    try {
        const nuevoRegistro = await extreferenciaregistralsistemaantiguo_tipo_referencia.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de extreferenciaregistralsistemaantiguo_tipo_referencia por ID
exports.extreferenciaregistralsistemaantiguo_tipo_referenciagetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extreferenciaregistralsistemaantiguo_tipo_referencia.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de extreferenciaregistralsistemaantiguo_tipo_referencia por ID
exports.extreferenciaregistralsistemaantiguo_tipo_referenciaupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await extreferenciaregistralsistemaantiguo_tipo_referencia.findByPk(id);
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

// Eliminar un registro de extreferenciaregistralsistemaantiguo_tipo_referencia por ID
exports.extreferenciaregistralsistemaantiguo_tipo_referenciadeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await extreferenciaregistralsistemaantiguo_tipo_referencia.findByPk(id);
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
