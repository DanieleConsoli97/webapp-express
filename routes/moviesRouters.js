


import express from "express" //NOTE - importiamo express

const router = express.Router()

import { index,show } from '../controller/moviesController.js' //NOTE - importiamo i controller

router.get('/',index);//NOTE - Impostaimo le rotte  Rotta index  localhost:3000/books/movies

router.get('/:id',show);//NOTE - rotta  show localhost:3000/books/movies/id

export default router