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