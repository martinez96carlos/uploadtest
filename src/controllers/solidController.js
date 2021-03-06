const pool = require('../database/connection');


const getSolids = async (req,res) => {
    const response = await pool.query(`select A.solid_id, A.solid_name 
    from solids A, solid_types B
    where A.solid_type_id = B.solid_type_id;`,(error, response, fields) => {
        if (!error){
           res.status(200).json(response.rows);
        } else {
            console.log('Error al obtener solidos');
        }
    });
}


module.exports = {
    getSolids
}