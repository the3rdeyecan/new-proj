let quizQuestions = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    choiceA: 'Hyper Text Main Link',
    choiceB: 'Hyper Text Markup Language',
    choiceC: 'Hyper Text Markup Link',
    choiceD: 'Hello to My Love',
    correctAnswer: 'choiceB',
    explanation:
      'HTML is the standard markup language for documents designed to be displayed in a web browser',
  },
  {
    id: 2,
    question: 'What is JavaScript?',
    choiceA:
      'JavaScript is a scripting language used to make the website interactive',
    choiceB:
      'JavaScript is an assembly language used to make the website interactive',
    choiceC:
      'JavaScript is a compiled language used to make the website interactive',
    choiceD: 'None of the mentioned',
    correctAnswer: 'choiceA',
    explanation:
      'JavaScript is a scripting language used along with HTML and CSS to make the website interactive along. It is used both on the client-side and server-side.',
  },
  {
    id: 3,
    question:
      'Arrays in JavaScript are defined by which of the following statements?',
    choiceA: 'It is an ordered list of values',
    choiceB: 'It is an ordered list of objects',
    choiceC: 'It is an ordered list of string',
    choiceD: ' It is an ordered list of functions',
    correctAnswer: 'choiceA',
    explanation:
      'An array in JavaScript is an ordered list of values, each value is referred to as an element, and it is identified by an index. An array can include values of many sorts and the length of an array dynamically sized.',
  },
  {
    id: 4,
    question: 'Which of the following is correct about JavaScript?',
    choiceA: 'JavaScript is an Object-Based language',
    choiceB: 'JavaScript is Assembly-language',
    choiceC: 'JavaScript is an Object-Oriented language',
    choiceD: ' JavaScript is a High-level language',
    correctAnswer: 'choiceA',
    explanation:
      'Although JavaScript is not an OOP (Object-Oriented Programming) language like Java or PHP, it is an object-oriented language. The standard threesome of polymorphism, encapsulation, and inheritance are the criteria for object orientation, and JavaScript fails to meet them.',
  },
  {
    id: 5,
    question: 'Which of the following is not an error in JavaScript?',
    choiceA: 'Missing of Bracket',
    choiceB: 'Division by zero',
    choiceC: 'Syntax error',
    choiceD: 'Missing of semicolons',
    correctAnswer: 'choiceB',
    explanation:
      'In JavaScript, division by zero does not result in an error; it just returns infinity or negative infinity. However, because zero divided by zero has no well-defined value, the result of this operation is the unusual not-a-number value, which is written as NaN.',
  },
  {
    id: 6,
    question: ' Which of the following scoping type does JavaScript use?',
    choiceA: ' Sequential',
    choiceB: 'Segmental',
    choiceC: 'Lexical',
    choiceD: 'Literal',
    correctAnswer: 'choiceC',
    explanation:
      'JavaScript, like most current programming languages, employs lexical scoping. This means that functions are performed with the variable scope in effect when they were defined, rather than the variable scope in effect when they are invoked.',
  },
  {
    id: 7,
    question: 'Which of the following methods/operation does javascript use?',
    choiceA: 'equalto()',
    choiceB: 'equals() and notequals()',
    choiceC: 'bitwise checking',
    choiceD: '=== and !==',
    correctAnswer: 'choiceD',
    explanation:
      'The comma operator, bitwise operators, and the ++ and — operators are not included in the subset. It also forbids the usage of == and!= due to the type conversion they do, instead requiring the use of === and!==.',
  },
  {
    id: 8,
    question: 'Which of the following is not a framework?',
    choiceA: 'JavaScript .NET',
    choiceB: ' JavaScript',
    choiceC: 'Cocoa JS',
    choiceD: 'jQuery',
    correctAnswer: 'choiceB',
    explanation:
      'jQuery, which is used in web development, is one of the most popular frameworks. JavaScript is a scripting language, not a framework, in this case.',
  },
  {
    id: 9,
    question:
      'Which of the following can be used to call a JavaScript Code Snippet?',
    choiceA: 'Function/Method',
    choiceB: 'Preprocessor',
    choiceC: 'Triggering Event',
    choiceD: 'RMI',
    correctAnswer:
      'A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others.',
  },
  {
    id: 9,
    question:
      'Which of the following can be used to call a JavaScript Code Snippet?',
    choiceA: 'Function/Method',
    choiceB: 'Preprocessor',
    choiceC: 'Triggering Event',
    choiceD: 'RMI',
    correctAnswer:
      'A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others.',
  },
];

export function listQuestions() {
  return quizQuestions;
}
