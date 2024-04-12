import express from 'express';
import { getBooks } from '../controller/bookController.js';

const bookRouter = express.Router();

bookRouter.get('/book', getBooks);

export default bookRouter;