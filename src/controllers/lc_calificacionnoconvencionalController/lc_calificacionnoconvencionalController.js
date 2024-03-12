// controllers/lc_calificacionnoconvecionalController.js
const db = require('../../../models/lc_calificacionnoconvencional');
const lc_calificacionnoconvecional = db.lc_calificacionnoconvecional;


// Obtener todos los calificaciones no convencionales
exports.getAllCalificacionesNoConvencionales = async (req, res) => {
    try {
        const calificacionesNoConvencionales = await lc_calificacionnoconvencional.findAll();
        return res.json(calificacionesNoConvencionales);
    } catch (error) {
        console.error('Error al obtener calificaciones no convencionales:', error);
        return res.status(500).json({ message: 'Error al obtener calificaciones no convencionales' });
    }
  };
  
  // Obtener una calificación no convencional por ID
  exports.getCalificacionNoConvencionalById = async (req, res) => {
    const { id } = req.params;
    try {
        const calificacionNoConvencional = await lc_calificacionnoconvencional.findByPk(id);
        if (!calificacionNoConvencional) {
            return res.status(404).json({ message: 'Calificación no convencional no encontrada' });
        }
        return res.json(calificacionNoConvencional);
    } catch (error) {
        console.error('Error al obtener calificación no convencional por ID:', error);
        return res.status(500).json({ message: 'Error al obtener calificación no convencional por ID' });
    }
  };
  
  // Crear una nueva calificación no convencional
  exports.createCalificacionNoConvencional = async (req, res) => {
    const { body } = req;
    try {
        const nuevaCalificacionNoConvencional = await lc_calificacionnoconvencional.create(body);
        return res.json(nuevaCalificacionNoConvencional);
    } catch (error) {
        console.error('Error al crear calificación no convencional:', error);
        return res.status(500).json({ message: 'Error al crear calificación no convencional' });
    }
  };
  
  // Actualizar una calificación no convencional por ID
  exports.updateCalificacionNoConvencional = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const calificacionNoConvencional = await lc_calificacionnoconvencional.findByPk(id);
        if (!calificacionNoConvencional) {
            return res.status(404).json({ message: 'Calificación no convencional no encontrada' });
        }
        await calificacionNoConvencional.update(body);
        return res.json(calificacionNoConvencional);
    } catch (error) {
        console.error('Error al actualizar calificación no convencional:', error);
        return res.status(500).json({ message: 'Error al actualizar calificación no convencional' });
    }
  };
  
  // Eliminar una calificación no convencional por ID
  exports.deleteCalificacionNoConvencional = async (req, res) => {
    const { id } = req.params;
    try {
        const calificacionNoConvencional = await lc_calificacionnoconvencional.findByPk(id);
        if (!calificacionNoConvencional) {
            return res.status(404).json({ message: 'Calificación no convencional no encontrada' });
        }
        await calificacionNoConvencional.destroy();
        return res.json({ message: 'Calificación no convencional eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar calificación no convencional:', error);
        return res.status(500).json({ message: 'Error al eliminar calificación no convencional' });
    }
  };