import express from 'express';
import {
  welcome,
  askPlayerName,
  quizQuestion1,
  quizQuestion2,
  quizQuestion3,
  quizQuestion4,
  quizQuestion5,
  quizQuestion6,
  quizQuestion7,
  quizQuestion8,
  quizQuestion9,
  quizQuestion10,
  winner,
  looser,
} from './gameLogic.js';

const app = express();
const PORT = process.env.PORT || 4000;

// app.use(express.json());
// app.use('/welcome', welcome);
// app.use('/playerName', askPlayerName);
// app.use('/question1', quizQuestion1);
// app.use('/question2', quizQuestion2);
// app.use('/question3', quizQuestion3);
// app.use('/question4', quizQuestion4);
// app.use('/question5', quizQuestion5);
// app.use('/question6', quizQuestion6);
// app.use('/question7', quizQuestion7);
// app.use('/question8', quizQuestion8);
// app.use('/question9', quizQuestion9);
// app.use('/question10', quizQuestion10);
// app.use('/winner', winner);
// app.use('/', looser);

app.get('/playerName', (req, res) => {
  res.send(askPlayerName().json);
});
app.get('/welcome', (req, res, next) => {
  res.send(welcome().json);
  next();
});
app.get('/question1', (req, res, next) => {
  res.send(quizQuestion1().json);
  next();
});
app.get('/question2', (req, res, next) => {
  res.send(quizQuestion2().json);
  next();
});
app.get('/question3', (req, res, next) => {
  res.send(quizQuestion3().json);
  next();
});
app.get('/question4', (req, res, next) => {
  res.send(quizQuestion4().json);
  next();
});
app.get('/question5', (req, res, next) => {
  res.send(quizQuestion5().json);
  next();
});
app.get('/question6', (req, res, next) => {
  res.send(quizQuestion6().json);
  next();
});
app.get('/question7', (req, res, next) => {
  res.send(quizQuestion7().json);
  next();
});
app.get('/question8', (req, res, next) => {
  res.send(quizQuestion8().json);
  next();
});
app.get('/question9', (req, res, next) => {
  res.send(quizQuestion9().json);
  next();
});
app.get('/question10', (req, res, next) => {
  res.send(quizQuestion10().json);
  next();
});
app.get('/winner', (req, res) => {
  res.send(winner().json);
  next();
});
app.get('/looser', (req, res) => {
  res.send(looser().json);
});

app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});

// console.clear();
// await welcome();
// await askPlayerName();
// await quizQuestion1();
// await quizQuestion2();
// await quizQuestion3();
// await quizQuestion4();
// await quizQuestion5();
// await quizQuestion6();
// await quizQuestion7();
// await quizQuestion8();
// await quizQuestion9();
// await quizQuestion10();
// winner();
// looser();
