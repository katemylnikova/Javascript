// Create Dino Constructor
function Dino (species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

// Create Dino Objects
const dinosFromJson = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
]

let triceratops = new Dino();
triceratops = Object.assign(triceratops, dinosFromJson[0]);
let tyrannosaurusRex = new Dino();
tyrannosaurusRex = Object.assign(tyrannosaurusRex, dinosFromJson[1]);
let anklyosaurus = new Dino();
anklyosaurus = Object.assign(anklyosaurus, dinosFromJson[2]);
let brachiosaurus = new Dino();
brachiosaurus = Object.assign(brachiosaurus, dinosFromJson[3]);
let stegosaurus = new Dino();
stegosaurus = Object.assign(stegosaurus, dinosFromJson[4]);
let elasmosaurus = new Dino();
elasmosaurus = Object.assign(elasmosaurus, dinosFromJson[5]);
let pteranodon = new Dino();
pteranodon = Object.assign(pteranodon, dinosFromJson[6]);
let pigeon = new Dino();
pigeon = Object.assign(pigeon, dinosFromJson[7])

// Create Human Object
const human = {};

// Use IIFE to get human data from form
const btn = document.getElementById('btn');
btn.addEventListener('click', (function getUserData() {
    human.name = document.getElementById('name').value;
    human.feet = document.getElementById('feet').value;
    human.inches = document.getElementById('inches').value;
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value.toLowerCase();

    if (human.name === '' || (human.feet === '' || human.inches === '') || human.weight === '') {
        alert('Please fill in your name, weight and height')
    }else {
        const form = document.getElementById('dino-compare');
        form.style.display = 'none';
        addTilesToDom();
        compareDinosToHuman();
    }
}));

//Array to use later for adding tiles to DOM
const dinosAndHumanArray = [];
dinosAndHumanArray.push(triceratops);
dinosAndHumanArray.push(tyrannosaurusRex);
dinosAndHumanArray.push(anklyosaurus);
dinosAndHumanArray.push(brachiosaurus);
dinosAndHumanArray.push(human);
dinosAndHumanArray.push(stegosaurus);
dinosAndHumanArray.push(elasmosaurus);
dinosAndHumanArray.push(pteranodon);
dinosAndHumanArray.push(pigeon);

//Function to convert user's height input to height in inches
function feetToInches (feet, inches) {
    return feet * 12 + inches;
}


//Calls compare functions when a dino's div is clicked
function compareDinosToHuman() {
    const gridItems = document.getElementsByClassName('grid-item');
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('click', (function compare() {
            let dinosName = this.firstElementChild.innerHTML;
            const dino = getDinoObjectByName(dinosName);
            if (dino) {
                console.log(`We compare Dino ${dinosName} and Human ${human.name}`)
                compareWeight(dino);
                compareHeight(dino);
                compareDiet(dino);
            }else {
                console.log(`That is you, ${human.name}!`)
            }

        }))
    }
}

//Searches for a dino object in the dinosAndHumanArray
function getDinoObjectByName(dinosName) {
   return  dinosAndHumanArray.find((dino) => {
        if (dino.species === dinosName) {
            return dino;
        }
    })
}

// Dino Compare Method 1
function compareDiet(dino) {
    console.log(`Dino's diet is ${dino.diet} and human's diet is ${human.diet}`);
}

// Dino Compare Method 2
 function compareWeight(dino) {
    console.log(`Dino's weight is ${dino.weight} lbs and human's weight is ${human.weight} lbs`);
}

// Dino Compare Method 3
function compareHeight(dino) {
    const humanHeight = feetToInches(human.feet, human.inches);
    console.log(`Dino is ${dino.height} inches high and human is ${humanHeight} inches high`);
}


// Add tiles to DOM
function addTilesToDom() {
    const gridElement = document.getElementById('grid');

    dinosAndHumanArray.forEach((dino) => {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid-item';
        const species = document.createElement('h2');
        species.innerText = dino instanceof Dino ? dino.species : dino.name;

        const image = document.createElement('img');
        image.src = dino instanceof Dino ? 'images/' + dino.species.toLowerCase() + '.png': 'images/human.png';
        const fact =  document.createElement('p');
        fact.innerText = dino instanceof Dino ? dino.fact: '';

        gridDiv.appendChild(species);
        gridDiv.appendChild(image);

        if (dino instanceof Dino) {
            gridDiv.appendChild(fact);
        }

        gridElement.appendChild(gridDiv);

    })
}
