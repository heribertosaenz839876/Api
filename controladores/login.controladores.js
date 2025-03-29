import { connectDB } from "../utils/sql.js";

export const login = async (req, res) =>{
    const sql = connectDB();
const query = {
    text: "select * from users where username = $1",
    values: [req.body.username],
  };
  const data = await sql.query(query);
  
  if (data.rows.length === 0) {
    // Usuario no existe
    return res.json({ isLogin: false, user: {} });
  }
  
  if (req.body.password === data.rows[0].password) {
    // Contraseña correcta
    return res.json({ isLogin: true, user: data.rows });
  } else {
    // Contraseña incorrecta
    return res.json({ isLogin: false, user: {} });
  }
  
  
  
    
};