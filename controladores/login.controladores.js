import { connectDB } from "../utils/sql.js";
import{hashPassword} from "../utils/hash.js";


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

  const salt = data.rows[0].password.substring(0,process.env.SALT);
  const hash = hashPassword(req.body.password, salt);
  const saltedHash = salt + hash;
  
  if (saltedHash === data.rows[0].password) {
    // Contraseña correcta
    return res.json({ isLogin: true, user: data.rows });
  } else {
    // Contraseña incorrecta
    return res.json({ isLogin: false, user: {} });
  }
  
  
  
    
};