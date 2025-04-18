//NOTE - pacchetti da importare

import express from "express";
import cors from 'cors'
import imagePathMiddleware from "./middleware/imagePath.js" //NOTE - importiamo il middleware per il path delle immagini e lo usiamo facendo app.use(imagePathMiddleware) in sostanza  
//il middleware è una funzione che si interpone tra la richiesta e la risposta del server, in questo caso il middleware si interpone tra la richiesta e la risposta del server per il path delle immagini ioi 
import 'dotenv/config'; //NOTE - ricordati importa la config del dotenv

const app = express();//NOTE - impostiamo express e la porta del server
const port =3000;
import moviesRouters from "./routes/moviesRouters.js"

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //NOTE - per il form di invio dei dati
app.use(express.static('public'))
app.use(imagePathMiddleware)
//Impostaimo il path
app.use('/movies',moviesRouters) 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
//attivazione del server
app.listen( port, () => {
    console.log( `Server Movies in funzione sulla porta: ${port}` )
} )