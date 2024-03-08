const { lc_predio } = require('../models');

// Obtener todos los predios
exports.getAllPredios = async (req, res) => {
    try {
        const predios = await lc_predio.findAll();
        return res.json(predios);
    } catch (error) {
        console.error('Error al obtener predios:', error);
        return res.status(500).json({ message: 'Error al obtener predios' });
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
        console.error('Error al obtener predio por ID:', error);
        return res.status(500).json({ message: 'Error al obtener predio por ID' });
    }
};

// Crear un nuevo predio
exports.createPredio = async (req, res) => {
    const { body } = req;
    try {
        const nuevoPredio = await lc_predio.create(body);
        return res.json(nuevoPredio);
    } catch (error) {
        console.error('Error al crear predio:', error);
        return res.status(500).json({ message: 'Error al crear predio' });
    }
};

// Actualizar un predio por ID
exports.updatePredio = async (req, res) => {
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
        console.error('Error al actualizar predio:', error);
        return res.status(500).json({ message: 'Error al actualizar predio' });
    }
};

// Eliminar un predio por ID
exports.deletePredio = async (req, res) => {
    const { id } = req.params;
    try {
        const predio = await lc_predio.findByPk(id);
        if (!predio) {
            return res.status(404).json({ message: 'Predio no encontrado' });
        }
        await predio.destroy();
        return res.json({ message: 'Predio eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar predio:', error);
        return res.status(500).json({ message: 'Error al eliminar predio' });
    }
};
