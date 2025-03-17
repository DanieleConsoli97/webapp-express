import connection from "../data/db.js";

function index(req, res) {
    //NOTE - impostiamo la query
    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: 'Errore lato server INDEX function'
            })
        }
        res.json(results);
    })
}
function show(req, res) {
   const id =parseInt(req.params.id)
   console.log(id)
    const sql = 'SELECT * FROM movies WHERE id = ?';
    
    connection.query(sql,[id],(err,results)=>{
        if (err) {
            return res.status(500).json({
                error: 'Errore lato server Show function'
            })
        }
        if (results.length === 0)
            return res.status(404).json({
            error: 'Movies not found',
        });
        res.json(results)
    })
} 
export { index, show };