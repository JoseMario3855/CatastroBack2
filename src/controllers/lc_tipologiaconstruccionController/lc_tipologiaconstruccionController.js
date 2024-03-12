// controllers/lc_tipologiaconstruccionController.js
const db = require('../../../models/lc_tipologiaconstruccion');
const lc_tipologiaconstruccion = db.lc_tipologiaconstruccion;

// Obtener todas las tipologías de construcción
exports.getAllTipologiasConstruccion = async (req, res) => {
    try {
        const tipologiasConstruccion = await lc_tipologiaconstruccion.findAll();
        return res.json(tipologiasConstruccion);
    } catch (error) {
        console.error('Error al obtener tipologías de construcción:', error);
        return res.status(500).json({ message: 'Error al obtener tipologías de construcción' });
    }
  };
  
  // Obtener una tipología de construcción por ID
  exports.getTipologiaConstruccionById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipologiaConstruccion = await lc_tipologiaconstruccion.findByPk(id);
        if (!tipologiaConstruccion) {
            return res.status(404).json({ message: 'Tipología de construcción no encontrada' });
        }
        return res.json(tipologiaConstruccion);
    } catch (error) {
        console.error('Error al obtener tipología de construcción por ID:', error);
        return res.status(500).json({ message: 'Error al obtener tipología de construcción por ID' });
    }
  };
  
  // Crear una nueva tipología de construcción
  exports.createTipologiaConstruccion = async (req, res) => {
    const { body } = req;
    try {
        const nuevaTipologiaConstruccion = await lc_tipologiaconstruccion.create(body);
        return res.json(nuevaTipologiaConstruccion);
    } catch (error) {
        console.error('Error al crear tipología de construcción:', error);
        return res.status(500).json({ message: 'Error al crear tipología de construcción' });
    }
  };
  
  // Actualizar una tipología de construcción por ID
  exports.updateTipologiaConstruccion = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipologiaConstruccion = await lc_tipologiaconstruccion.findByPk(id);
        if (!tipologiaConstruccion) {
            return res.status(404).json({ message: 'Tipología de construcción no encontrada' });
        }
        await tipologiaConstruccion.update(body);
        return res.json(tipologiaConstruccion);
    } catch (error) {
        console.error('Error al actualizar tipología de construcción:', error);
        return res.status(500).json({ message: 'Error al actualizar tipología de construcción' });
    }
  };
  
  // Eliminar una tipología de construcción por ID
  exports.deleteTipologiaConstruccion = async (req, res) => {
    const { id } = req.params;
    try {
        const tipologiaConstruccion = await lc_tipologiaconstruccion.findByPk(id);
        if (!tipologiaConstruccion) {
            return res.status(404).json({ message: 'Tipología de construcción no encontrada' });
        }
        await tipologiaConstruccion.destroy();
        return res.json({ message: 'Tipología de construcción eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar tipología de construcción:', error);
        return res.status(500).json({ message: 'Error al eliminar tipología de construcción' });
    }
  };