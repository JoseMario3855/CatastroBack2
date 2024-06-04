// src/controllers/lc_prediocontroller.js
import lc_predio from '../../models/lc_predio.js';


export const getAllPredios = async (req, res) => {
    try {
        const data = await lc_predio.findAll();
        res.json(data);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ message: 'Error al obtener los registros' });
    }
};

export const createPredio = async (req, res) => {
    const {
        t_ili_tid, departamento, municipio, id_operacion, tiene_fmi, codigo_orip,
        matricula_inmobiliaria, numero_predial, numero_predial_anterior, codigo_homologado,
        interrelacionado, codigo_homologado_fmi, nupre, avaluo_catastral, valor_referencia,
        condicion_predio, destinacion_economica, clase_suelo, nombre, comienzo_vida_util_version,
        espacio_de_nombres, local_id
    } = req.body;

    try {
        const newPredio = await lc_predio.create({
            t_ili_tid, departamento, municipio, id_operacion, tiene_fmi, codigo_orip,
            matricula_inmobiliaria, numero_predial, numero_predial_anterior, codigo_homologado,
            interrelacionado, codigo_homologado_fmi, nupre, avaluo_catastral, valor_referencia,
            condicion_predio, destinacion_economica, clase_suelo, nombre, comienzo_vida_util_version,
            espacio_de_nombres, local_id
        });
        res.status(201).json(newPredio);
    } catch (error) {
        console.error('Error al crear el registro:', error);
        res.status(500).json({ message: 'Error al crear el registro' });
    }
};

export const getPredioById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_predio.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(registro);
    } catch (error) {
        console.error('Error al obtener el registro por ID:', error);
        res.status(500).json({ message: 'Error al obtener el registro por ID' });
    }
};

export const updatePredioById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = await lc_predio.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await registro.update(body);
        res.json(registro);
    } catch (error) {
        console.error('Error al actualizar el registro por ID:', error);
        res.status(500).json({ message: 'Error al actualizar el registro por ID' });
    }
};

export const deletePredioById = async (req, res) => {
    const { id } = req.params;
    try {
        const registro = await lc_predio.findByPk(id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await registro.destroy();
        res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el registro por ID:', error);
        res.status(500).json({ message: 'Error al eliminar el registro por ID' });
    }
};
