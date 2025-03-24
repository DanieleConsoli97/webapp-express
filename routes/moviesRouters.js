


import express from "express" //NOTE - importiamo express

const router = express.Router()

import { index,show, storeReview,store } from '../controller/moviesController.js' //NOTE - importiamo i controller
import upload from "../middleware/multer.js";

router.get('/',index);//NOTE - Impostaimo le rotte  Rotta index  localhost:3000/

router.get('/:id',show);//NOTE - rotta  show localhost:3000/books/movies/id

router.post('/:id/reviews',storeReview);//NOTE - rotta storeReview localhost:3000/movies/movies/id/reviews

router.post('/',upload.single('image'),store);//NOTE - rotta upload localhost:3000/   upload.single('image') è il middleware che si occupa di caricare una singola l'immagine     image è il nome del campo del form e colonna del db
export default router