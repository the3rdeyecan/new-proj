import express from 'express';
import { questionsRouter } from './routes/questionRouter';

const app = express();
const PORT = process.env.PORT || 4000;

app.use('/questions', questionsRouter);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});
