import connection from "../data/db.js";

//SECTION - funzione index
//NOTE - funzione che ritorna tutti i film

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

        const movies = results.map((movie) => {

            return {
                ...movie,
                //NOTE - creiamo il path completo per l'immagine
                image: req.imagePath + movie.image
            }

        })

        res.json(movies);

    })
}

//SECTION - funzione show
//NOTE - funzione che ritorna un film in base all'id

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
            let movie = results[0];
            movie = {
                ...movie,
                // NOTE - creiamo il path completo per l'immagine
                image: req.imagePath + movie.image
            };
       
        connection.query(reviewSql, [id], (err, reviewsResults) => {
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

//SECTION - funzione storeReview
//NOTE - funzione che crea una recensione
//NOTE - la recensione è legata ad un film tramite l'id
//NOTE - la recensione è composta da name,vote,text
//NOTE - la recensione viene inserita nella tabella reviews
//NOTE - ritorna un json con l'id della recensione creata
function storeReview(req, res) {
    const { id } = req.params;
    console.log(req.body)
    const { name, vote, text } = req.body;

    const sql = 'INSERT INTO reviews (name,vote,text,movie_id) VALUES (?,?,?,?)';

    connection.query(sql, [name, vote, text, id], (err, results) => {

        if (err) {
            return res.status(500).json({
                error: 'Errore lato server storeReview function'
            })
        }
        res.status(201)
        res.json({
            message: 'Review created',
            id: results.insertId,
        }
        )
    }
    )
}

//SECTION - funzione store
function store() {
    const { title, director, genre, release_year, abstract } = req.body;
    const image = req.file.filename;
    const sql = 'INSERT INTO movies (title,director,genre,release_year,abstract,image) VALUES (?,?,?,?,?)';
    connection.query(sql, [title, director, genre, release_year, abstract, image], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: 'Errore lato server store function'
            })
        }
        res.status(201)
        res.json({
            message: 'Movie created',
            id: results.insertId,
        }
        )
    })
}

export { index, show, storeReview, store };