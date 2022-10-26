import chalk from 'chalk';
import inquirer from 'inquirer';

let playerName;

const sleep = (a = 1000) => new Promise((b) => setTimeout(b, a)); //sleep function

async function welcome() {
  console.log("Welcome to the game! Let's test your javaScript knowledge \n");

  await sleep();
  console.log(`
    ${chalk.bgYellowBright('HOW TO PLAY\n')}
    ${chalk.greenBright('-> Answer the multiple choice javaScript questions.')}
    ${chalk.greenBright("-> It's all or nothing !")}
    ${chalk.greenBright(
      "-> If you can't answer a question, you will loose the game!\n"
    )}
    ${chalk.greenBright('GOOD LUCK !!!\n')}
  `);
}

async function askPlayerName() {
  const player = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });
  playerName = player.player_name;
  console.log(chalk.blue(`Nice to me meet you ${playerName}, let's start...`));

  await sleep();
}

async function answerInput(isCorrect) {
  if (isCorrect) {
    console.log(
      chalk.green(`\nThat is correct ${playerName}!, next question...\n`)
    );
  } else {
    return looser();
  }
}

function winner() {
  console.clear();
  console.log(
    chalk.green(
      `Congratulations ${playerName}! You have answered all the questions correctly !`
    )
  );
  console.log(chalk.yellowBright(`Thank you for your time !`));
  process.exit(0);
}

function looser() {
  console.clear();
  console.log(`
    ${chalk.red('Bummer ! That was a wrong answer !')}
    ${chalk.red(
      `Sorry ${playerName}, you didn't win this one but remember! practice makes perfect!`
    )}
  `);
  console.log(chalk.yellowBright(`Thank you for your time !\n`));
  process.exit(0);
}

async function quizQuestion1() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion1',
    type: 'list',
    message: 'What does HTML stand for?\n',
    choices: [
      'Hyper Text Main Link',
      'Hyper Text Markup Language',
      'Hello to My Love',
      'Hyper Text Markup Link',
    ],
  });
  await sleep();
  return answerInput(answers.quizQuestion1 === 'Hyper Text Markup Language');
}

async function quizQuestion2() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion2',
    type: 'list',
    message: 'What is JavaScript?\n',
    choices: [
      'Scripting language used to make the website interactive',
      'Assembly language used to make the website interactive',
      'Compiled language used to make the website interactive',
      'None of the mentioned',
    ],
  });
  await sleep();
  return answerInput(
    answers.quizQuestion2 ===
      'Scripting language used to make the website interactive'
  );
}

async function quizQuestion3() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion3',
    type: 'list',
    message: 'Which of the following is correct about JavaScript?\n',
    choices: [
      'JavaScript is an Object-Based language',
      'JavaScript is Assembly-language',
      'JavaScript is an Object-Oriented language',
      ' JavaScript is a High-level language',
    ],
  });
  await sleep();
  return answerInput(
    answers.quizQuestion3 === 'JavaScript is an Object-Based language'
  );
}

async function quizQuestion4() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion4',
    type: 'list',
    message:
      'Arrays in JavaScript are defined by which of the following statements?\n',
    choices: [
      'It is an ordered list of values',
      'It is an ordered list of objects',
      'It is an ordered list of string',
      ' It is an ordered list of functions',
    ],
  });
  await sleep();
  return answerInput(
    answers.quizQuestion4 === 'It is an ordered list of values'
  );
}

async function quizQuestion5() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion5',
    type: 'list',
    message: 'Which of the following is not an error in JavaScript?\n',
    choices: [
      'Missing of Bracket',
      'Division by zero',
      'Syntax error',
      'Missing of semicolons',
    ],
  });
  await sleep();
  return answerInput(answers.quizQuestion5 === 'Division by zero');
}

async function quizQuestion6() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion6',
    type: 'list',
    message: 'Which of the following scoping type does JavaScript use?\n',
    choices: [' Sequential', 'Segmental', 'Lexical', 'Literal'],
  });
  await sleep();
  return answerInput(answers.quizQuestion6 === 'Lexical');
}

async function quizQuestion7() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion7',
    type: 'list',
    message: 'Which of the following methods/operation does javascript use?\n',
    choices: [
      'equalto()',
      'equals() and notequals()',
      'bitwise checking',
      '=== and !==',
    ],
  });
  await sleep();
  return answerInput(answers.quizQuestion7 === '=== and !==');
}
async function quizQuestion8() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion8',
    type: 'list',
    message: 'Which of the following is not a framework?\n',
    choices: ['JavaScript .NET', 'JavaScript', 'Cocoa JS', 'jQuery'],
  });
  await sleep();
  return answerInput(answers.quizQuestion8 === 'JavaScript');
}
async function quizQuestion9() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion9',
    type: 'list',
    message:
      'Which of the following can be used to call a JavaScript Code Snippet?\n',
    choices: ['Function/Method', 'Preprocessor', 'Triggering Event', 'RMI'],
  });
  await sleep();
  return answerInput(answers.quizQuestion9 === 'Function/Method');
}
async function quizQuestion10() {
  const answers = await inquirer.prompt({
    name: 'quizQuestion10',
    type: 'list',
    message: 'Which of the following is not javascript data types?\n',
    choices: [
      'Null type',
      'Undefined type',
      'Number type',
      'All of the mentioned',
    ],
  });
  await sleep();
  return answerInput(answers.quizQuestion10 === 'All of the mentioned');
}

console.clear();
await welcome();
await askPlayerName();
await quizQuestion1();
await quizQuestion2();
await quizQuestion3();
await quizQuestion4();
await quizQuestion5();
await quizQuestion6();
await quizQuestion7();
await quizQuestion8();
await quizQuestion9();
await quizQuestion10();
winner();
looser();
