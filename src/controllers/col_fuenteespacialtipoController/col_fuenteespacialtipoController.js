// controllers/col_fuenteespacialtipoController.js
const db = require('../../../models/col_fuenteespacialtipo');
const col_fuenteespacialtipo = db.col_fuenteespacialtipo;

//Obtener todos los registros de col_fuenteespacialtipo
exports.getAllcol_fuenteespacialtipo = async (req, res) => {
    try {
        const data = await col_fuenteespacialtipo.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en col_fuenteespacialtipo
exports.col_fuenteespacialtipocreate = async (req, res) => {
    try {
        const nuevoRegistro = await col_fuenteespacialtipo.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de col_fuenteespacialtipo por ID
exports.col_fuenteespacialtipogetById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_fuenteespacialtipo.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de col_fuenteespacialtipo por ID
exports.col_fuenteespacialtipoupdateById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await col_fuenteespacialtipo.findByPk(id);
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

// Eliminar un registro de col_fuenteespacialtipo por ID
exports.col_fuenteespacialtipodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_fuenteespacialtipo.findByPk(id);
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
