import express from 'express';
import { listQuestions } from '.models/questions.js';
export const questionsRouter = express.Router();

questionsRouter.get('/', (req, res) => {
  const questions = listQuestions();

  res.send({ questions });
});
