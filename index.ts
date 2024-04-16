#! /usr/bin/env node

// This line is called the shebang, it tells the OS to run this file

import inquirer from 'inquirer'


// Declare a constant 'answers' and assign it to the result of inquirer.prompt function


const answers: {
    Sentences: string
} = await inquirer.prompt ([
    {
    name: 'Sentences',
    type: 'input',
    message: 'Enter your sentences to count the word:'
}
])

const words = answers.Sentences.trim().split(" ");


// Print the array of words to the console

console.log(words)

// Print the word count of the sentence to the console

console.log(`Your sentence word count is ${words.length}`);