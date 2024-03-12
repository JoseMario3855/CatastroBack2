// controllers/lc_construccionplantatipoController.js
const db = require('../../../models/lc_construccionplantatipo');
const lc_construccionplantatipo = db.lc_construccionplantatipo;

// Obtener todas las construcciones planta tipo
exports.getAllConstruccionesPlantaTipo = async (req, res) => {
    try {
        const construccionesPlantaTipo = await lc_construccionplantatipo.findAll();
        return res.json(construccionesPlantaTipo);
    } catch (error) {
        console.error('Error al obtener construcciones planta tipo:', error);
        return res.status(500).json({ message: 'Error al obtener construcciones planta tipo' });
    }
  };
  
  // Obtener una construcción planta tipo por ID
  exports.getConstruccionPlantaTipoById = async (req, res) => {
    const { id } = req.params;
    try {
        const construccionPlantaTipo = await lc_construccionplantatipo.findByPk(id);
        if (!construccionPlantaTipo) {
            return res.status(404).json({ message: 'Construcción planta tipo no encontrada' });
        }
        return res.json(construccionPlantaTipo);
    } catch (error) {
        console.error('Error al obtener construcción planta tipo por ID:', error);
        return res.status(500).json({ message: 'Error al obtener construcción planta tipo por ID' });
    }
  };
  
  // Crear una nueva construcción planta tipo
  exports.createConstruccionPlantaTipo = async (req, res) => {
    const { body } = req;
    try {
        const nuevaConstruccionPlantaTipo = await lc_construccionplantatipo.create(body);
        return res.json(nuevaConstruccionPlantaTipo);
    } catch (error) {
        console.error('Error al crear construcción planta tipo:', error);
        return res.status(500).json({ message: 'Error al crear construcción planta tipo' });
    }
  };
  
  // Actualizar una construcción planta tipo por ID
  exports.updateConstruccionPlantaTipo = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const construccionPlantaTipo = await lc_construccionplantatipo.findByPk(id);
        if (!construccionPlantaTipo) {
            return res.status(404).json({ message: 'Construcción planta tipo no encontrada' });
        }
        await construccionPlantaTipo.update(body);
        return res.json(construccionPlantaTipo);
    } catch (error) {
        console.error('Error al actualizar construcción planta tipo:', error);
        return res.status(500).json({ message: 'Error al actualizar construcción planta tipo' });
    }
  };
  
  // Eliminar una construcción planta tipo por ID
  exports.deleteConstruccionPlantaTipo = async (req, res) => {
    const { id } = req.params;
    try {
        const construccionPlantaTipo = await lc_construccionplantatipo.findByPk(id);
        if (!construccionPlantaTipo) {
            return res.status(404).json({ message: 'Construcción planta tipo no encontrada' });
        }
        await construccionPlantaTipo.destroy();
        return res.json({ message: 'Construcción planta tipo eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar construcción planta tipo:', error);
        return res.status(500).json({ message: 'Error al eliminar construcción planta tipo' });
    }
  };
  
