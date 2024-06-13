// controllers/col_baunitcomointeresadoController.js
import col_baunitcomointeresado from "../../models/col_baunitcomointeresado.js";

//Obtener todos los registros de col_baunitcomointeresado
export const getAllcol_baunitcomointeresado = async (req, res) => {
    try {
        const data = await col_baunitcomointeresado.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

// Crear un nuevo registro en col_baunitcomointeresado
export const createcol_baunitcomointeresado = async (req, res) => {
    try {
        const nuevoRegistro = await col_baunitcomointeresado.create(req.body);
        return res.json(nuevoRegistro);
    } catch (error) {
        console.error('Error al crear un nuevo registro:', error);
        return res.status(500).json({ message: 'Error al crear un nuevo registro' });
    }
};

// Obtener un registro de col_baunitcomointeresado por ID
export const col_baunitcomointeresadoById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_baunitcomointeresado.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        return res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        return res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

// Actualizar un registro de col_baunitcomointeresado por ID
export const ACcol_baunitcomointeresadoById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await col_baunitcomointeresado.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await registro.update(body);
        return res.json(registro);
    } catch (error) {
        console.error('Error al actualizar el registro por ID:', error);
        return res.status(500).json({ message: 'Error al actualizar el registro por ID' });
    }
};

// Eliminar un registro de col_baunitcomointeresado por ID
export const col_baunitcomointeresadodeleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await col_baunitcomointeresado.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await registro.destroy();
        return res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el registro por ID:', error);
        return res.status(500).json({ message: 'Error al eliminar el registro por ID' });
    }
};
