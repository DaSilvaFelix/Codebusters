import { connectDB } from "../db/database.js";
import { validarJWT } from "../helpers/validarJWT.js";

export const vistas = async (req, res) => {
  const connection = await connectDB();

  const token = req.headers.token;
  const usuario = await validarJWT(token);

  if (!usuario){
    return res.status(403).json({
      msg: "No estas autorizado para realizar esta accion",
    })}else{
      const [results1] = await connection.query('SELECT * FROM `app_iversivas`');
      const [results2] = await connection.query('SELECT * FROM `bancos`');
      const [results3] = await connection.query('SELECT * FROM `billeteras_vittuales`');

      return res.json(results1,results2,results3)
    }
};