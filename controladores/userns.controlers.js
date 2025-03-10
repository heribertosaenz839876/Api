import { connectDB } from "../utils/sql.js";

export const getUsers = async (req, res) =>{
    const sql = connectDB();
    const { rows }= await sql.query("select *from users");
   // console.log(data,rows);
    res.json(rows);
};

export const getUser = async (req, res) =>{
    const sql = connectDB();
    const query = {text: "select *from users where user_id = $1", values: [req.params.id]};
    const { rows }= await sql.query(query);
   // console.log(data,rows);
    res.json(rows);
};

export const postUser = async (req, res) =>{
    //console.log(req.body);
    const {username, first_name, last_name, birthdate, password, email} = req.body
    const sql = connectDB();
    const query = {
        text: "INSERT INTO users (username, first_name, last_name, birthdate, password, email) VALUES ($1, $2, $3, $4, $5, $6)",
        values: [username, first_name, last_name, birthdate, password, email]
    };    
    const { rows }= await sql.query(query);
    //console.log(data,rows);
    res.json(rows);
    //res.send("user added");
};

export const putUser = async (req, res) =>{
    //console.log(req.body);
    const {username, first_name, last_name, birthdate, password, email} = req.body
    const sql = connectDB();
    const query = {
        text: "update users set username=$1, first_name=$2, last_name=$3, birthdate=$4, password=$5, email=$6 where user_id =$7",
        values: [username, first_name, last_name, birthdate, password, email,req.params.id]
    };    
    const { rows }= await sql.query(query);
    //console.log(data,rows);
    res.json(rows);
    //res.send("user added");
};

export const deleteUser = async (req, res) =>{
    try {
    //console.log(req.body);
    const sql = connectDB();
    const query = {
        text: "delete from users where user_id= $1",
        values: [req.params.id]
    };    
    await sql.query(query);
    //console.log(data,rows);
    res.status(200).json({msg:"Ya se borro"});
} catch (error){
    res.status(500).json({msg:error.msg})
}
    //res.send("user added");
};

//export const getUsers = async (req, res) =>{
    //const sql = connectDB();
   // const data = await sql.query("select *from users where ")
   // console.log(data,rows);
   // res.json(data.rows);
//};