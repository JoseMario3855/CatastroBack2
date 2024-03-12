// controllers/lc_caracteristicaunidadconstruccionController.js
const db = require('../../../models/lc_caracteristicaunidadconstruccion');
const lc_caracteristicaunidadconstruccion = db.lc_caracteristicaunidadconstruccion;


// Obtener todos los las caracteristicas de la unidad de construccion
exports.getAllcaracteristicasdelaunidaddeconstruccion = async (req, res) => {
    try {
        const caracteristicasdelaunidaddeconstruccion = await lc_caracteristicaunidadconstruccion.findAll();
        return res.json(caracteristicasdelaunidaddeconstruccion);
    } catch (error) {
        console.error('Error al obtener las caracteristicas de la unidad de construccion:', error);
        return res.status(500).json({ message: 'Error al obtener las caracteristicas de la unidad de construccion' });
    }
  };
  
  // Obtener una caracteristicas de la unidad de construccion por ID
  exports.getcaracteristicasdelaunidaddeconstruccionById = async (req, res) => {
    const { id } = req.params;
    try {
        const caracteristicasdelaunidaddeconstruccion = await lc_caracteristicaunidadconstruccion.findByPk(id);
        if (!caracteristicasdelaunidaddeconstruccion) {
            return res.status(404).json({ message: 'caracteristicas de la unidad de construccion no encontrada' });
        }
        return res.json(caracteristicasdelaunidaddeconstruccion);
    } catch (error) {
        console.error('Error al obtener caracteristicas de la unidad de construccion por ID:', error);
        return res.status(500).json({ message: 'Error al obtener caracteristicas de la unidad de construccion por ID' });
    }
  };
  
  // Crear una nueva caracteristicas de la unidad de construccion
  exports.createcaracteristicasdelaunidaddeconstruccion = async (req, res) => {
    const { body } = req;
    try {
        const nuevacaracteristicasdelaunidaddeconstruccion = await lc_caracteristicaunidadconstruccion.create(body);
        return res.json(nuevacaracteristicasdelaunidaddeconstruccion);
    } catch (error) {
        console.error('Error al crear caracteristicas de la unidad de construccion:', error);
        return res.status(500).json({ message: 'Error al crear caracteristicas de la unidad de construccion' });
    }
  };
  
  // Actualizar una caracteristicas de la unidad de construccion por ID
  exports.updatecaracteristicasdelaunidaddeconstruccion = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const caracteristicasdelaunidaddeconstruccion = await lc_caracteristicaunidadconstruccion.findByPk(id);
        if (!caracteristicasdelaunidaddeconstruccion) {
            return res.status(404).json({ message: 'caracteristicas de la unidad de construccion no encontrada' });
        }
        await caracteristicasdelaunidaddeconstruccion.update(body);
        return res.json(caracteristicasdelaunidaddeconstruccion);
    } catch (error) {
        console.error('Error al actualizar caracteristicas de la unidad de construccion:', error);
        return res.status(500).json({ message: 'Error al actualizar caracteristicas de la unidad de construccion' });
    }
  };
  
  // Eliminar una caracteristicas de la unidad de construccion por ID
  exports.deletecaracteristicasdelaunidaddeconstruccion = async (req, res) => {
    const { id } = req.params;
    try {
        const caracteristicasdelaunidaddeconstruccion = await lc_caracteristicaunidadconstruccion.findByPk(id);
        if (!caracteristicasdelaunidaddeconstruccion) {
            return res.status(404).json({ message: 'caracteristicas de la unidad de construccion no encontrada' });
        }
        await caracteristicasdelaunidaddeconstruccion.destroy();
        return res.json({ message: 'caracteristicas de la unidad de construccion eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar caracteristicas de la unidad de construccion:', error);
        return res.status(500).json({ message: 'Error al eliminar caracteristicas de la unidad de construccion' });
    }
  };