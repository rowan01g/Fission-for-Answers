const question = document.querySelector('#question') 
const choices = Array.from(document.querySelectorAll('.choice-text')) 
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true 
let score = 0 
let questionCounter = 0
let availableQuestions = []

let questions = [
    //CHEMISTRY
    {
        question: 'What is the chemical symbol for water?',
        choice1: 'HO',
        choice2: 'H2O',
        choice3: 'OH',
        choice4: 'O2H',
        answer: 2,
    },
    {
        question: 'What is the smallest unit of a chemical element?',
        choice1: 'Molecule',
        choice2: 'Atom',
        choice3: 'Electron',
        choice4: 'Proton',
        answer: 2,
    },
    {
        question: 'What is the chemical symbol for gold?',
        choice1: 'Ag',
        choice2: 'Au',
        choice3: 'Pb',
        choice4: 'Fe',
        answer: 2,
    },
    {
        question: 'What gas do plants absorb from the atmosphere?',
        choice1: 'Oxygen',
        choice2: 'Nitrogen',
        choice3: 'Carbon Dioxide',
        choice4: 'Hydrogen',
        answer: 3,
    },
    {
        question: 'What is the chemical symbol for sodium?',
        choice1: 'S',
        choice2: 'Na',
        choice3: 'N',
        choice4: 'Ne',
        answer: 2,
    },
    {
        question: 'What is the common name for dihydrogen monoxide?',
        choice1: 'Ammonia',
        choice2: 'Hydrogen Peroxide',
        choice3: 'Water',
        choice4: 'Methane',
        answer: 3,
    },
    {
        question: 'What element is represented by the symbol "O"?',
        choice1: 'Osmium',
        choice2: 'Oxygen',
        choice3: 'Gold',
        choice4: 'Silver',
        answer: 2,
    },
    {
        question: 'What is the pH of pure water?',
        choice1: '7',
        choice2: '5',
        choice3: '9',
        choice4: '11',
        answer: 1,
    },
    {
        question: 'What is the main component of the sun?',
        choice1: 'Oxygen',
        choice2: 'Nitrogen',
        choice3: 'Hydrogen',
        choice4: 'Helium',
        answer: 3,
    },
    {
        question: 'What is the chemical symbol for iron?',
        choice1: 'I',
        choice2: 'Fe',
        choice3: 'Ir',
        choice4: 'In',
        answer: 2,
    },
    {
        question: 'What is the most abundant gas in Earth’s atmosphere?',
        choice1: 'Oxygen',
        choice2: 'Hydrogen',
        choice3: 'Carbon Dioxide',
        choice4: 'Nitrogen',
        answer: 4,
    },
    {
        question: 'What is the chemical formula for methane?',
        choice1: 'CH4',
        choice2: 'CO2',
        choice3: 'C2H6',
        choice4: 'NH3',
        answer: 1,
    },
    {
        question: 'What substance is produced during photosynthesis?',
        choice1: 'Carbon Dioxide',
        choice2: 'Water',
        choice3: 'Oxygen',
        choice4: 'Nitrogen',
        answer: 3,
    },
    {
        question: 'What is the chemical formula for table salt?',
        choice1: 'KCl',
        choice2: 'NaCl',
        choice3: 'NaOH',
        choice4: 'HCl',
        answer: 2,
    },
    {
        question: 'What type of bond is formed when two atoms share electrons?',
        choice1: 'Ionic Bond',
        choice2: 'Hydrogen Bond',
        choice3: 'Covalent Bond',
        choice4: 'Metallic Bond',
        answer: 3,
    },
    {
        question: 'What is the chemical symbol for potassium?',
        choice1: 'P',
        choice2: 'K',
        choice3: 'Pt',
        choice4: 'Po',
        answer: 2,
    },
    {
        question: 'What is the main gas found in the air we breathe?',
        choice1: 'Oxygen',
        choice2: 'Carbon Dioxide',
        choice3: 'Nitrogen',
        choice4: 'Hydrogen',
        answer: 3,
    },
    {
        question: 'What element has the atomic number 1?',
        choice1: 'Helium',
        choice2: 'Hydrogen',
        choice3: 'Lithium',
        choice4: 'Beryllium',
        answer: 2,
    },
];

/*
10 points are earned for every question correctly answered
and only 10 questions may be answered
*/
const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

/*
The arrow function startGame ensures the question counter and score are set to 0. 
The variable availibleQuestions is also created from the questions bank 
The function getNewQuestion is called at the start fof the game 
*/
startGame = () => {
    questionCounter = 0 
    score = 0 
    availableQuestions = [...questions]
    getNewQuestion()
}

/*
In the getNewQuestion function, first, js checks if there are no more available questions or the question counter has exceeded the maximum allowed questions - if so the score is recorded
The user is then also directed to the end.html page as the game has ended
If the game can continue, the questionCounter is incremented by 1 - inner text displays what question of the maxiumum allowed questions you are curently on
the ratio of questionCounter to MAX_QUESTIONS is taken and displayed as a progress bar 

questionsIndex is a number that is randomly generated between 0 and the number of questions in availableQuestions
The currentQuestion is then displayed by taking the banked question information using questionsIndex 
the text of the question to be displayed is sourced from the currrentQuestion

The function then iterates over all the choices in the html
it declares number as the number associated with the "dataset" class 
the text of choice in the game is then pulled from the currentQuestion 

The question just presented is then removed from the availibleQuestions pool using questionsIndex and splice
*/

getNewQuestion = () => {

    questionCounter++ 
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS ) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }


    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` 
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex] 
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number'] 
        choice.innerText = currentQuestion['choice' + number] // eg. choice4: "Paris" - inner text will retrieve "Paris" as currentQuestion retrieves "choice4" - "choice4" will correspond to an actual question
    })

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true 
}

/*
In this function, the actions are repeated for each choice. Fisrt, an EventListener is added to each choice and given the variable, e
if (!acceptingAnswers) false then insured that one cannot click on the button multiple times - acceptingAsnwers = false is declared after this line

The choice the user selected is captured with e.target
SelectedAnswer is then declared and assigned a number from selectedChoice
classToApply is assigned correct or incorrect depending on if the selected answer macthes the answer of currentQuestion 
if classToApply is correct, the score is increased by 10 points using the function incrementScore

class ('correct' or 'incorrect') is added to the parent element of the selected choice. This is used to visually indicate whether the choice was correct or incorrect (e.g., changing its background colour).
The applied class ('correct' or 'incorrect') is removed to reset the visual state of the choice.
execution of the code inside the function is delayed by 1000 milliseconds before moving on the next question

*/

choices.forEach(choice => {
    choice.addEventListener('click', e => { 
        if(!acceptingAnswers) return

        acceptingAnswers = false 
        const selectedChoice = e.target 
        const selectedAnswer = selectedChoice.dataset['number'] 

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect' 

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply) //

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply) // 
            getNewQuestion()
        }, 1000) 
    })
})

/* The incrementScopre function is decalred */

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
