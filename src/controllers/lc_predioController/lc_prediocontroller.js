// controladores/lc_predioController.js
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

// Crear un nuevo predio
exports.createPredio = async (req, res) => {
    try {
        const nuevoPredio = await lc_predio.create(req.body);
        return res.json(nuevoPredio);
    } catch (error) {
        console.error('Error al crear predio:', error);
        return res.status(500).json({ message: 'Error al crear predio' });
    }
};


