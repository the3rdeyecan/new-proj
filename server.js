const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  console.log('User Accesed, \nWelcome message sent!');
  res.send('Hello There!');
});

app.get('/forest', (req, res) => {
  let dayLight = req.query.dayLight;
  let dragons = req.query.dragons;
  if ((dayLight === 'true') & (dragons >= 5)) {
    res.send('You are in a decently lit wood...there may be dragons sleeping');
  } else {
    res.send('You are in deep dark woods...and dragons are waking up!!!');
  }
});

app.post('/', function (req, res) {
  res.json(req.body);
});
