// controladores/lc_predioController.js
const db = require('../../../models/lc_predio');
const lc_predio = db.lc_predio;

// Obtener todos los predios
exports.getAllPredios = async (req, res) => {
    try {
        const predios = await lc_predio.findAll();
        res.json(predios);
    } catch (error) {
        console.error('Error al obtener los predios:', error);
        res.status(500).json({ message: 'Error al obtener los predios' });
    }
};

// Crear un nuevo predio
exports.createPredio = async (req, res) => {
    try {
        const nuevoPredio = await lc_predio.create(req.body);
        res.json(nuevoPredio);
    } catch (error) {
        console.error('Error al crear un nuevo predio:', error);
        res.status(500).json({ message: 'Error al crear un nuevo predio' });
    }
};

// Obtener un predio por ID
exports.getPredioById = async (req, res) => {
    const { id } = req.params;
    try {
        const predio = await lc_predio.findByPk(id);
        if (!predio) {
            return res.status(404).json({ message: 'Predio no encontrado' });
        }
        return res.json(predio);
    } catch (error) {
        console.error('Error al obtener el predio por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el predio por ID' });
    }
};

// Actualizar un predio por ID
exports.updatePredioById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const predio = await lc_predio.findByPk(id);
        if (!predio) {
            return res.status(404).json({ message: 'Predio no encontrado' });
        }
        await predio.update(body);
        return res.json(predio);
    } catch (error) {
        console.error('Error al actualizar el predio por ID:', error);
        return res.status(500).json({ message: 'Error al actualizar el predio por ID' });
    }
};

// Eliminar un predio por ID
exports.deletePredioById = async (req, res) => {
    const { id } = req.params;
    try {
        const predio = await lc_predio.findByPk(id);
        if (!predio) {
            return res.status(404).json({ message: 'Predio no encontrado' });
        }
        await predio.destroy();
        return res.json({ message: 'Predio eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el predio por ID:', error);
        return res.status(500).json({ message: 'Error al eliminar el predio por ID' });
    }
};
