const pool = require('../database/connectiondm');

const obtenerVolumenPorTipoDeResiduo = async (req,res) => {
    const response = await pool.query(`
    /*Pesos por residuo GENERAL*/
    select C.solid_type_id, C.solid_type_name, Sum(A.weight)
    from fact_recolection A, dim_solids B, dim_solid_types C
    where A.solid_id = B.solid_id and B.solid_type_id = C.solid_type_id
    group by C.solid_type_name, C.solid_type_id
    order by C.solid_type_id`,(error, response, fields) => {
        if (!error){
           res.status(200).json(response.rows);
        } else {
           console.log(error);
        }
    });
}

module.exports = {
    obtenerVolumenPorTipoDeResiduo
}