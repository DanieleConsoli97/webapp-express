import connection from "../data/db.js";

function index(req, res) {
    //NOTE - impostiamo la query
    const sql = 'SELECT * FROM movies'

    connection.query(sql, (err, results) => {
        console.log("richiesta effettuata")
        if (err) {
            return res.status(500).json({
                error: 'Errore lato server INDEX function'
            })
        }
        res.json(results);
    })
}
function show(req, res) {
    const id = parseInt(req.params.id)

    console.log(`Richiesta effettuata per id:${id}`)

    const MovieSql = 'SELECT * FROM movies WHERE id = ? ';

    const reviewSql = 'SELECT * FROM reviews WHERE movie_id = ? ';

    connection.query(MovieSql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: 'Errore lato server Show function'
            })
        }
        if (results.length === 0)
            return res.status(404).json({
                error: 'Movies not found',
            });
            const movie = results[0];
        connection.query(reviewSql,[id], (err,reviewsResults) => {
            if (err) {
                return res.status(500).json({
                    error: 'Errore lato server Show function'
                })
            }
           
                movie.reviews = reviewsResults;
                 res.json(movie);
        })
       
     }
    )
}
function storeReview(req,res){
        const {id} = req.params;
        const {text,name,vote}=req.body;
        const sql = 'INSERT INTO reviews (text,name,vote,movie_id) VALUES (?,?,?,?)';
        
        connection.query(sql,[text,name,vote,id],(err,results)=>{
        
            if(err){
                return res.status(500).json({
                    error: 'Errore lato server storeReview function'
                })
            }
            res.status(201)
            res.json({
                message:'Review created',
                id:results.insertId,
                text,
                name,
                vote,
                movie_id:id}
            )
        })
    }
export { index, show ,storeReview};