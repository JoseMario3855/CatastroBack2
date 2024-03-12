// controllers/lc_unidadconstruccionController.js
const db = require('../../../models/lc_unidadconstruccion');
const lc_unidadconstruccion = db.lc_unidadconstruccion;

// Obtener todas las unidades de construcción
exports.getAllunidadconstruccion = async (req, res) => {
    try {
        const unidadconstruccion = await lc_unidadconstruccion.findAll();
        return res.json(unidadconstruccion);
    } catch (error) {
        console.error('Error al obtener unidades de construcción:', error);
        return res.status(500).json({ message: 'Error al obtener unidades de construcción' });
    }
  };
  
  // Obtener un unidades de construcción por ID
  exports.getunidadconstruccionyId = async (req, res) => {
    const { id } = req.params;
    try {
        const unidadconstruccion = await lc_unidadconstruccion.findByPk(id);
        if (!unidadconstruccion) {
            return res.status(404).json({ message: 'unidades de construcción no encontrado' });
        }
        return res.json(unidadconstruccion);
    } catch (error) {
        console.error('Error al obtener unidades de construcción por ID:', error);
        return res.status(500).json({ message: 'Error al obtener unidades de construcción por ID' });
    }
  };
  
  // Crear un nuevo unidades de construcción
  exports.createunidadconstruccion = async (req, res) => {
    const { body } = req;
    try {
        const nuevounidadconstruccion = await lc_unidadconstruccion.create(body);
        return res.json(nuevounidadconstruccion);
    } catch (error) {
        console.error('Error al crear unidades de construcción:', error);
        return res.status(500).json({ message: 'Error al crear unidades de construcción' });
    }
  };
  
  // Actualizar un unidades de construcción por ID
  exports.updateunidadconstruccion = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const unidadconstruccion = await lc_unidadconstruccion.findByPk(id);
        if (!unidadconstruccion) {
            return res.status(404).json({ message: 'unidades de construcción no encontrado' });
        }
        await unidadconstruccion.update(body);
        return res.json(unidadconstruccion);
    } catch (error) {
        console.error('Error al actualizar unidades de construcción:', error);
        return res.status(500).json({ message: 'Error al actualizar unidades de construcción' });
    }
  };
  
  // Eliminar un unidades de construcción por ID
  exports.deleteunidadconstruccion = async (req, res) => {
    const { id } = req.params;
    try {
        const unidadconstruccion = await lc_unidadconstruccion.findByPk(id);
        if (!unidadconstruccion) {
            return res.status(404).json({ message: 'unidades de construcción no encontrado' });
        }
        await unidadconstruccion.destroy();
        return res.json({ message: 'unidades de construcción eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar unidades de construcción:', error);
        return res.status(500).json({ message: 'Error al eliminar unidades de construcción' });
    }
  };
  