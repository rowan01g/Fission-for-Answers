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

let questions = [ //question bank - physics, need to add chemistry and biology
    
    //BIOLOGY
    {
        question: 'What is the powerhouse of the cell?',
        choice1: 'Nucleus',
        choice2: 'Mitochondria',
        choice3: 'Ribosome',
        choice4: 'Endoplasmic Reticulum',
        answer: 2,
    },
    {
        question: 'What is the process by which plants make their food?',
        choice1: 'Photosynthesis',
        choice2: 'Respiration',
        choice3: 'Digestion',
        choice4: 'Transpiration',
        answer: 1,
    },
    {
        question: 'What is the basic unit of life?',
        choice1: 'Cell',
        choice2: 'Tissue',
        choice3: 'Organ',
        choice4: 'Organ System',
        answer: 1,
    },
    {
        question: 'What is the process by which cells divide?',
        choice1: 'Mitosis',
        choice2: 'Meiosis',
        choice3: 'Fertilization',
        choice4: 'Conjugation',
        answer: 1,
    },
    {
        question: 'What is the genetic material in a cell?',
        choice1: 'RNA',
        choice2: 'Proteins',
        choice3: 'Lipids',
        choice4: 'DNA',
        answer: 4,
    },
    {
        question: 'What is the main gas used by plants during photosynthesis?',
        choice1: 'Oxygen',
        choice2: 'Carbon Dioxide',
        choice3: 'Nitrogen',
        choice4: 'Hydrogen',
        answer: 2,
    },
    {
        question: 'What is the largest organ in the human body?',
        choice1: 'Liver',
        choice2: 'Heart',
        choice3: 'Skin',
        choice4: 'Brain',
        answer: 3,
    },
    {
        question: 'What is the common name for the clavicle?',
        choice1: 'Shin Bone',
        choice2: 'Collar Bone',
        choice3: 'Thigh Bone',
        choice4: 'Skull',
        answer: 2,
    },
    {
        question: 'What blood type is known as the universal donor?',
        choice1: 'A',
        choice2: 'B',
        choice3: 'AB',
        choice4: 'O Negative',
        answer: 4,
    },
    {
        question: 'What is the study of heredity and the variation of inherited characteristics?',
        choice1: 'Ecology',
        choice2: 'Genetics',
        choice3: 'Botany',
        choice4: 'Zoology',
        answer: 2,
    },
    {
        question: 'What is the organ that pumps blood throughout the body?',
        choice1: 'Liver',
        choice2: 'Lungs',
        choice3: 'Heart',
        choice4: 'Kidneys',
        answer: 3,
    },
    {
        question: 'What is the process by which organisms maintain a stable internal environment?',
        choice1: 'Osmosis',
        choice2: 'Homeostasis',
        choice3: 'Diffusion',
        choice4: 'Circulation',
        answer: 2,
    },
    {
        question: 'What is the name of the process by which green plants use sunlight to synthesize foods?',
        choice1: 'Germination',
        choice2: 'Photosynthesis',
        choice3: 'Pollination',
        choice4: 'Transpiration',
        answer: 2,
    },
    {
        question: 'What part of the cell contains the genetic material?',
        choice1: 'Cytoplasm',
        choice2: 'Nucleus',
        choice3: 'Cell Membrane',
        choice4: 'Mitochondria',
        answer: 2,
    },
    {
        question: 'What is the term for an organism’s observable characteristics?',
        choice1: 'Genotype',
        choice2: 'Phenotype',
        choice3: 'Allele',
        choice4: 'Trait',
        answer: 2,
    },
    {
        question: 'What is the primary pigment found in green plants?',
        choice1: 'Carotene',
        choice2: 'Chlorophyll',
        choice3: 'Xanthophyll',
        choice4: 'Anthocyanin',
        answer: 2,
    },
    {
        question: 'What is the classification system used to name and categorize organisms?',
        choice1: 'Taxonomy',
        choice2: 'Ecology',
        choice3: 'Anatomy',
        choice4: 'Physiology',
        answer: 1,
    },
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
    //PHYSICS
    {
        question: 'What is the force that pulls objects toward the Earth?',
        choice1: 'Friction',
        choice2: 'Magnetism',
        choice3: 'Gravity',
        choice4: 'Electricity',
        answer: 3,
    },
    {
        question: 'What is the basic unit of electric current?',
        choice1: 'Volt',
        choice2: 'Ampere',
        choice3: 'Watt',
        choice4: 'Joule',
        answer: 2,
    },
    {
        question: 'What do you call the push or pull on an object?',
        choice1: 'Friction',
        choice2: 'Force',
        choice3: 'Energy',
        choice4: 'Motion',
        answer: 2,
    },
    {
        question: 'What is the center of an atom called?',
        choice1: 'Electron',
        choice2: 'Proton',
        choice3: 'Nucleus',
        choice4: 'Neutron',
        answer: 3,
    },
    {
        question: 'What is the unit of energy?',
        choice1: 'Newton',
        choice2: 'Pascal',
        choice3: 'Joule',
        choice4: 'Coulomb',
        answer: 3,
    },
    {
        question: 'What is the speed of sound in air approximately?',
        choice1: '343 meters per second (m/s)',
        choice2: '300 meters per second (m/s)',
        choice3: '1500 meters per second (m/s)',
        choice4: '299,792 meters per second (m/s)',
        answer: 1,
    },
    {
        question: 'What type of energy is stored in a stretched rubber band?',
        choice1: 'Kinetic energy',
        choice2: 'Potential energy',
        choice3: 'Elastic potential energy',
        choice4: 'Thermal energy',
        answer: 3,
    },
    {
        question: 'What do you call materials that do not allow electricity to flow through them easily?',
        choice1: 'Conductors',
        choice2: 'Insulators',
        choice3: 'Semiconductors',
        choice4: 'Superconductors',
        answer: 2,
    },
    {
        question: 'What is the chemical symbol for water?',
        choice1: 'O₂',
        choice2: 'H₂O',
        choice3: 'CO₂',
        choice4: 'H₂',
        answer: 2,
    },
    {
        question: 'Which planet is known for having a ring system?',
        choice1: 'Earth',
        choice2: 'Mars',
        choice3: 'Saturn',
        choice4: 'Venus',
        answer: 3,
    },
    {
        question: 'What is the state of matter with a definite shape and volume?',
        choice1: 'Solid',
        choice2: 'Liquid',
        choice3: 'Gas',
        choice4: 'Plasma',
        answer: 1,
    },
    {
        question: 'What is the phenomenon of bending light as it passes through a prism?',
        choice1: 'Reflection',
        choice2: 'Refraction',
        choice3: 'Diffraction',
        choice4: 'Interference',
        answer: 2,
    },
    {
        question: 'What is the unit of power?',
        choice1: 'Watt (W)',
        choice2: 'Joule (J)',
        choice3: 'Coulomb (C)',
        choice4: 'Newton (N)',
        answer: 1,
    },
    {
        question: 'What is the term for a material that allows electricity to flow easily?',
        choice1: 'Insulator',
        choice2: 'Conductor',
        choice3: 'Resistor',
        choice4: 'Capacitor',
        answer: 2,
    },
    {
        question: 'What is the smallest particle of an element that retains the properties of that element?',
        choice1: 'Molecule',
        choice2: 'Atom',
        choice3: 'Ion',
        choice4: 'Electron',
        answer: 2,
    },
    {
        question: 'What is the change in position of an object over time called?',
        choice1: 'Velocity',
        choice2: 'Acceleration',
        choice3: 'Motion',
        choice4: 'Displacement',
        answer: 3,
    },
    {
        question: 'What do you call the energy possessed by an object due to its motion?',
        choice1: 'Potential energy',
        choice2: 'Kinetic energy',
        choice3: 'Thermal energy',
        choice4: 'Chemical energy',
        answer: 2,
    },
    {
        question: 'What instrument is used to measure temperature?',
        choice1: 'Barometer',
        choice2: 'Thermometer',
        choice3: 'Hygrometer',
        choice4: 'Anemometer',
        answer: 2,
    },
    {
        question: 'What is the unit of frequency?',
        choice1: 'Hertz (Hz)',
        choice2: 'Watt (W)',
        choice3: 'Joule (J)',
        choice4: 'Newton (N)',
        answer: 1,
    },
    {
        question: 'What is the natural satellite of the Earth?',
        choice1: 'Mars',
        choice2: 'Venus',
        choice3: 'The Sun',
        choice4: 'The Moon',
        answer: 4,
    }
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

/* Jess' attempt at adding keyboard scrolling */ 

document.querySelector('.choice-container-container').addEventListener('keydown', function(e) {
    const scrollAmount = 10;
    if (e.key === 'ArrowDown') {
        this.scrollTop += scrollAmount;
    }
    if (e.key === 'ArrowUp') {
        this.scrollTop -= scrollAmount;
    }
    if (e.key === 'ArrowRight') {
        this.scrollLeft += scrollAmount;
    }
    if (e.key === 'ArrowLeft') {
        this.scrollLeft -= scrollAmount;
    }
});

