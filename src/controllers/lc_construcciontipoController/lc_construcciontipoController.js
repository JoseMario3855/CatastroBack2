// controllers/lc_construcciontipoController.js
const db = require('../../../models/lc_construcciontipo');
const lc_construcciontipo = db.lc_construcciontipo;

// Obtener todos los tipos de construcción
exports.getAllconstrucciontipo = async (req, res) => {
    try {
        const construcciontipo = await lc_construcciontipo.findAll();
        return res.json(construcciontipo);
    } catch (error) {
        console.error('Error al obtener tipos de construcción:', error);
        return res.status(500).json({ message: 'Error al obtener tipos de construcción' });
    }
  };
  
  // Obtener un tipos de construcción por ID
  exports.getconstrucciontipoyId = async (req, res) => {
    const { id } = req.params;
    try {
        const construcciontipo = await lc_construcciontipo.findByPk(id);
        if (!construcciontipo) {
            return res.status(404).json({ message: 'tipos de construcción no encontrado' });
        }
        return res.json(construcciontipo);
    } catch (error) {
        console.error('Error al obtener tipos de construcción por ID:', error);
        return res.status(500).json({ message: 'Error al obtener tipos de construcción por ID' });
    }
  };
  
  // Crear un nuevo tipos de construcción
  exports.createconstrucciontipo = async (req, res) => {
    const { body } = req;
    try {
        const nuevoconstrucciontipo = await lc_construcciontipo.create(body);
        return res.json(nuevoconstrucciontipo);
    } catch (error) {
        console.error('Error al crear tipos de construcción:', error);
        return res.status(500).json({ message: 'Error al crear tipos de construcción' });
    }
  };
  
  // Actualizar un tipos de construcción por ID
  exports.updateconstrucciontipo = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const construcciontipo = await lc_construcciontipo.findByPk(id);
        if (!construcciontipo) {
            return res.status(404).json({ message: 'tipos de construcción no encontrado' });
        }
        await construcciontipo.update(body);
        return res.json(construcciontipo);
    } catch (error) {
        console.error('Error al actualizar tipos de construcción:', error);
        return res.status(500).json({ message: 'Error al actualizar tipos de construcción' });
    }
  };
  
  // Eliminar un tipos de construcción por ID
  exports.deleteconstrucciontipo = async (req, res) => {
    const { id } = req.params;
    try {
        const construcciontipo = await lc_construcciontipo.findByPk(id);
        if (!construcciontipo) {
            return res.status(404).json({ message: 'tipos de construcción no encontrado' });
        }
        await construcciontipo.destroy();
        return res.json({ message: 'tipos de construcción eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar tipos de construcción:', error);
        return res.status(500).json({ message: 'Error al eliminar tipos de construcción' });
    }
  };
  

