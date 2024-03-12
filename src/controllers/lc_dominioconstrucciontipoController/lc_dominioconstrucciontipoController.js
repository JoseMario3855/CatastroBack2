// controllers/lc_dominioconstrucciontipoController.js
const db = require('../../../models/lc_dominioconstrucciontipo');
const lc_dominioconstrucciontipo = db.lc_dominioconstrucciontipo;


// Obtener todos los dominios de construcción tipo
exports.getAllDominiosConstruccionTipo = async (req, res) => {
    try {
        const dominiosConstruccionTipo = await lc_dominioconstrucciontipo.findAll();
        return res.json(dominiosConstruccionTipo);
    } catch (error) {
        console.error('Error al obtener dominios de construcción tipo:', error);
        return res.status(500).json({ message: 'Error al obtener dominios de construcción tipo' });
    }
  };
  
  // Obtener un dominio de construcción tipo por ID
  exports.getDominioConstruccionTipoById = async (req, res) => {
    const { id } = req.params;
    try {
        const dominioConstruccionTipo = await lc_dominioconstrucciontipo.findByPk(id);
        if (!dominioConstruccionTipo) {
            return res.status(404).json({ message: 'Dominio de construcción tipo no encontrado' });
        }
        return res.json(dominioConstruccionTipo);
    } catch (error) {
        console.error('Error al obtener dominio de construcción tipo por ID:', error);
        return res.status(500).json({ message: 'Error al obtener dominio de construcción tipo por ID' });
    }
  };
  
  // Crear un nuevo dominio de construcción tipo
  exports.createDominioConstruccionTipo = async (req, res) => {
    const { body } = req;
    try {
        const nuevoDominioConstruccionTipo = await lc_dominioconstrucciontipo.create(body);
        return res.json(nuevoDominioConstruccionTipo);
    } catch (error) {
        console.error('Error al crear dominio de construcción tipo:', error);
        return res.status(500).json({ message: 'Error al crear dominio de construcción tipo' });
    }
  };
  
  // Actualizar un dominio de construcción tipo por ID
  exports.updateDominioConstruccionTipo = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const dominioConstruccionTipo = await lc_dominioconstrucciontipo.findByPk(id);
        if (!dominioConstruccionTipo) {
            return res.status(404).json({ message: 'Dominio de construcción tipo no encontrado' });
        }
        await dominioConstruccionTipo.update(body);
        return res.json(dominioConstruccionTipo);
    } catch (error) {
        console.error('Error al actualizar dominio de construcción tipo:', error);
        return res.status(500).json({ message: 'Error al actualizar dominio de construcción tipo' });
    }
  };
  
  // Eliminar un dominio de construcción tipo por ID
  exports.deleteDominioConstruccionTipo = async (req, res) => {
    const { id } = req.params;
    try {
        const dominioConstruccionTipo = await lc_dominioconstrucciontipo.findByPk(id);
        if (!dominioConstruccionTipo) {
            return res.status(404).json({ message: 'Dominio de construcción tipo no encontrado' });
        }
        await dominioConstruccionTipo.destroy();
        return res.json({ message: 'Dominio de construcción tipo eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar dominio de construcción tipo:', error);
        return res.status(500).json({ message: 'Error al eliminar dominio de construcción tipo' });
    }
  };