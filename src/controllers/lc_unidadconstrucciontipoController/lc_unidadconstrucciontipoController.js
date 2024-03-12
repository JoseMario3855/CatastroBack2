// controllers/lc_unidadconstrucciontipoController.js
const db = require('../../../models/lc_unidadconstrucciontipo');
const lc_unidadconstrucciontipo = db.lc_unidadconstrucciontipo;

// Obtener todas las unidades de construcción tipo
exports.getAllUnidadesConstruccionTipo = async (req, res) => {
    try {
        const unidadesConstruccionTipo = await lc_unidadconstrucciontipo.findAll();
        return res.json(unidadesConstruccionTipo);
    } catch (error) {
        console.error('Error al obtener unidades de construcción tipo:', error);
        return res.status(500).json({ message: 'Error al obtener unidades de construcción tipo' });
    }
  };
  
  // Obtener una unidad de construcción tipo por ID
  exports.getUnidadConstruccionTipoById = async (req, res) => {
    const { id } = req.params;
    try {
        const unidadConstruccionTipo = await lc_unidadconstrucciontipo.findByPk(id);
        if (!unidadConstruccionTipo) {
            return res.status(404).json({ message: 'Unidad de construcción tipo no encontrada' });
        }
        return res.json(unidadConstruccionTipo);
    } catch (error) {
        console.error('Error al obtener unidad de construcción tipo por ID:', error);
        return res.status(500).json({ message: 'Error al obtener unidad de construcción tipo por ID' });
    }
  };
  
  // Crear una nueva unidad de construcción tipo
  exports.createUnidadConstruccionTipo = async (req, res) => {
    const { body } = req;
    try {
        const nuevaUnidadConstruccionTipo = await lc_unidadconstrucciontipo.create(body);
        return res.json(nuevaUnidadConstruccionTipo);
    } catch (error) {
        console.error('Error al crear unidad de construcción tipo:', error);
        return res.status(500).json({ message: 'Error al crear unidad de construcción tipo' });
    }
  };
  
  // Actualizar una unidad de construcción tipo por ID
  exports.updateUnidadConstruccionTipo = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const unidadConstruccionTipo = await lc_unidadconstrucciontipo.findByPk(id);
        if (!unidadConstruccionTipo) {
            return res.status(404).json({ message: 'Unidad de construcción tipo no encontrada' });
        }
        await unidadConstruccionTipo.update(body);
        return res.json(unidadConstruccionTipo);
    } catch (error) {
        console.error('Error al actualizar unidad de construcción tipo:', error);
        return res.status(500).json({ message: 'Error al actualizar unidad de construcción tipo' });
    }
  };
  
  // Eliminar una unidad de construcción tipo por ID
  exports.deleteUnidadConstruccionTipo = async (req, res) => {
    const { id } = req.params;
    try {
        const unidadConstruccionTipo = await lc_unidadconstrucciontipo.findByPk(id);
        if (!unidadConstruccionTipo) {
            return res.status(404).json({ message: 'Unidad de construcción tipo no encontrada' });
        }
        await unidadConstruccionTipo.destroy();
        return res.json({ message: 'Unidad de construcción tipo eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar unidad de construcción tipo:', error);
        return res.status(500).json({ message: 'Error al eliminar unidad de construcción tipo' });
    }
  };