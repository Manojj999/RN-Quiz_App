/////////////////////////////////////////////////////////////////////
// This file contains a JSON object which contains a list of space
// questions and their answers
const questions = [
  {
    question: 'What is the fifth planet from the sun?',
    answers: [
      {id: '1', text: 'Mars'},
      {id: '2', text: 'Jupiter', correct: true},
      {id: '3', text: 'Saturn'},
      {id: '4', text: 'Venus'},
    ],
  },
  {
    question: 'How many planets are in the Solar System?',
    answers: [
      {id: '1', text: '6'},
      {id: '2', text: '7'},
      {id: '3', text: '8', correct: true},
      {id: '4', text: '9'},
    ],
  },
  {
    question: 'How many books you have?',
    answers: [
      {id: '1', text: '1'},
      {id: '2', text: '2'},
      {id: '3', text: '3', correct: true},
      {id: '4', text: 'not sure'},
    ],
  },
]

// Export the questions JSON object
export default questions
