//NOTE - pacchetti da importare

import express from "express";

import 'dotenv/config'; //NOTE - ricordati importa la config del dotenv


const app = express();//NOTE - impostiamo express e la porta del server
const port =3000;

import moviesRouters from "./routes/moviesRouters.js"

//Impostaimo il path
app.use('/movies',moviesRouters) 

//attivazione del server
app.listen( port, () => {
    console.log( `Server Movies in funzione sulla porta: ${port}` )
} )