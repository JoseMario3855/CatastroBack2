// controllers/ci_forma_presentacion_codigoController.js
const db = require('../../../models/ci_forma_presentacion_codigo');
const ci_forma_presentacion_codigo = db.ci_forma_presentacion_codigo;

//Obtener todos los registros de ci_forma_presentacion_codigo
exports.getAllci_forma_presentacion_codigo = async (req, res) => {
    try {
        const data = await ci_forma_presentacion_codigo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en ci_forma_presentacion_codigo
exports.createci_forma_presentacion_codigo = async (req, res) => {
    try {
        const nuevoRegistro = await ci_forma_presentacion_codigo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de ci_forma_presentacion_codigo por ID
exports.ci_forma_presentacion_codigoById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await ci_forma_presentacion_codigo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de ci_forma_presentacion_codigo por ID
exports.ACci_forma_presentacion_codigoById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await ci_forma_presentacion_codigo.findByPk(id);
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

// Eliminar un registro de ci_forma_presentacion_codigo por ID
exports.ci_forma_presentacion_codigodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await ci_forma_presentacion_codigo.findByPk(id);
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
