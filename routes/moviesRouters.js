


import express from "express" //NOTE - importiamo express

const router = express.Router()

import { index,show, storeReview } from '../controller/moviesController.js' //NOTE - importiamo i controller

router.get('/',index);//NOTE - Impostaimo le rotte  Rotta index  localhost:3000/books/movies

router.get('/:id',show);//NOTE - rotta  show localhost:3000/books/movies/id

router.post('/:id/reviews',storeReview);//NOTE - rotta storeReview localhost:3000/books/movies/id/reviews

export default router