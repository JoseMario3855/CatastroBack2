// controllers/lc_usouconstipoController.js
const db = require('../../../models/lc_usouconstipo');
const lc_usouconstipo = db.lc_usouconstipo;

// Obtener todos los tipos de uso de construcción
exports.getAllTiposUsoConstruccion = async (req, res) => {
    try {
        const tiposUsoConstruccion = await lc_usouconstipo.findAll();
        return res.json(tiposUsoConstruccion);
    } catch (error) {
        console.error('Error al obtener tipos de uso de construcción:', error);
        return res.status(500).json({ message: 'Error al obtener tipos de uso de construcción' });
    }
  };
  
  // Obtener un tipo de uso de construcción por ID
  exports.getTipoUsoConstruccionById = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoUsoConstruccion = await lc_usouconstipo.findByPk(id);
        if (!tipoUsoConstruccion) {
            return res.status(404).json({ message: 'Tipo de uso de construcción no encontrado' });
        }
        return res.json(tipoUsoConstruccion);
    } catch (error) {
        console.error('Error al obtener tipo de uso de construcción por ID:', error);
        return res.status(500).json({ message: 'Error al obtener tipo de uso de construcción por ID' });
    }
  };
  
  // Crear un nuevo tipo de uso de construcción
  exports.createTipoUsoConstruccion = async (req, res) => {
    const { body } = req;
    try {
        const nuevoTipoUsoConstruccion = await lc_usouconstipo.create(body);
        return res.json(nuevoTipoUsoConstruccion);
    } catch (error) {
        console.error('Error al crear tipo de uso de construcción:', error);
        return res.status(500).json({ message: 'Error al crear tipo de uso de construcción' });
    }
  };
  
  // Actualizar un tipo de uso de construcción por ID
  exports.updateTipoUsoConstruccion = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipoUsoConstruccion = await lc_usouconstipo.findByPk(id);
        if (!tipoUsoConstruccion) {
            return res.status(404).json({ message: 'Tipo de uso de construcción no encontrado' });
        }
        await tipoUsoConstruccion.update(body);
        return res.json(tipoUsoConstruccion);
    } catch (error) {
        console.error('Error al actualizar tipo de uso de construcción:', error);
        return res.status(500).json({ message: 'Error al actualizar tipo de uso de construcción' });
    }
  };
  
  // Eliminar un tipo de uso de construcción por ID
  exports.deleteTipoUsoConstruccion = async (req, res) => {
    const { id } = req.params;
    try {
        const tipoUsoConstruccion = await lc_usouconstipo.findByPk(id);
        if (!tipoUsoConstruccion) {
            return res.status(404).json({ message: 'Tipo de uso de construcción no encontrado' });
        }
        await tipoUsoConstruccion.destroy();
        return res.json({ message: 'Tipo de uso de construcción eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar tipo de uso de construcción:', error);
        return res.status(500).json({ message: 'Error al eliminar tipo de uso de construcción' });
    }
  };
  