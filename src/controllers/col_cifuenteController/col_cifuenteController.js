// controllers/col_cifuenteController.js
const db = require('../../../models/col_baunitfuente');
const col_cifuente = db.col_cifuente;

//Obtener todos los registros de col_cifuente
exports.getAllcol_cifuente = async (req, res) => {
    try {
        const data = await col_cifuente.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en col_cifuente
exports.createcol_cifuente = async (req, res) => {
    try {
        const nuevoRegistro = await col_cifuente.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de col_cifuente por ID
exports.col_cifuenterById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_cifuente.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de col_cifuente por ID
exports.ACcol_cifuenteById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await col_cifuente.findByPk(id);
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

// Eliminar un registro de col_cifuente por ID
exports.col_cifuenteeById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_cifuente.findByPk(id);
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
