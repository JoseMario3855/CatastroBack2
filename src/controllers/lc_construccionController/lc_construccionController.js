// controladores/lc_construccionController.js
const db = require('../../../models/lc_construccion');
const lc_construccion = db.lc_construccion;

// Obtener todas las Construcciones	
exports.getAllConstrucciones	 = async (req, res) => {
    try {
        const Construcciones	 = await lc_construccion.findAll();
        return res.json(Construcciones	);
    } catch (error) {
        console.error('Error al obtener Construcciones	:', error);
        return res.status(500).json({ message: 'Error al obtener Construcciones	' });
    }
  };
  
  // Obtener un Construcciones	 por ID
  exports.getConstruccionesyId = async (req, res) => {
    const { id } = req.params;
    try {
        const Construcciones	 = await lc_construccion.findByPk(id);
        if (!Construcciones	) {
            return res.status(404).json({ message: 'Construcciones	 no encontrado' });
        }
        return res.json(Construcciones	);
    } catch (error) {
        console.error('Error al obtener Construcciones	 por ID:', error);
        return res.status(500).json({ message: 'Error al obtener Construcciones	 por ID' });
    }
  };
  
  // Crear un nuevo Construcciones	
  exports.createConstrucciones	 = async (req, res) => {
    const { body } = req;
    try {
        const nuevoConstrucciones	 = await lc_construccion.create(body);
        return res.json(nuevoConstrucciones	);
    } catch (error) {
        console.error('Error al crear Construcciones	:', error);
        return res.status(500).json({ message: 'Error al crear Construcciones	' });
    }
  };
  
  // Actualizar un Construcciones	 por ID
  exports.updateConstrucciones	 = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const Construcciones	 = await lc_construccion.findByPk(id);
        if (!Construcciones	) {
            return res.status(404).json({ message: 'Construcciones	 no encontrado' });
        }
        await Construcciones	.update(body);
        return res.json(Construcciones	);
    } catch (error) {
        console.error('Error al actualizar Construcciones	:', error);
        return res.status(500).json({ message: 'Error al actualizar Construcciones	' });
    }
  };
  
  // Eliminar un Construcciones	 por ID
  exports.deleteConstrucciones	 = async (req, res) => {
    const { id } = req.params;
    try {
        const Construcciones	 = await lc_construccion.findByPk(id);
        if (!Construcciones	) {
            return res.status(404).json({ message: 'Construcciones	 no encontrado' });
        }
        await Construcciones	.destroy();
        return res.json({ message: 'Construcciones	 eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar Construcciones	:', error);
        return res.status(500).json({ message: 'Error al eliminar Construcciones	' });
    }
  };
  