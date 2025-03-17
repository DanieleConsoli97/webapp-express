import connection from "../data/db";

function index (req,res){
    //NOTE - impostiamo la query
    const sql = 'SELECT * FROM movies'

    connection.query(sql,(err,results)=>{
        if(err){
            return res.status(500).json({
                error:'Errore lato server INDEX function'
            })
        }
        res.json(results);
    })
} 