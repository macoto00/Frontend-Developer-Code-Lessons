// ==================
// == Joke Fetcher ==
// ==================

const fetchButton = document.getElementById('fetchButton');
const resultContainer = document.getElementById('resultContainer');
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; 

fetchButton.addEventListener('click', () => {
    resultContainer.innerText = 'Loading...';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            const titleElement = document.createElement('p');
            titleElement.innerText = `Title: ${data.title}`;

            const bodyElement = document.createElement('p');
            bodyElement.innerText = `Body: ${data.body}`;

            resultContainer.innerHTML = ''; 
            resultContainer.appendChild(titleElement);
            resultContainer.appendChild(bodyElement);
        })
        .catch(error => {
            resultContainer.innerText = `Error fetching data: ${error.message}`;
        });
});

// ==============
// == Surprise ==
// ==============

const triggerButton = document.getElementById('triggerButton');
const countdown = document.getElementById('countdown');
const timer = document.getElementById('timer');
const surpriseMessage = document.getElementById('surpriseMessage');

let seconds = 5;

const showSurprise = () => {
    countdown.style.display = 'none';
    surpriseMessage.style.display = 'block';
    surpriseMessage.textContent = 'Surprise! 🎉';
    surpriseMessage.style.fontSize = '24px';
    surpriseMessage.style.color = 'red';
};

const updateTimer = () => {
    timer.textContent = seconds;
    if (seconds === 0) {
        clearInterval(countdownInterval);
        showSurprise();
    } else {
        seconds -= 1;
    }
};

let countdownInterval;

triggerButton.addEventListener('click', () => {
    countdown.style.display = 'block';
    surpriseMessage.style.display = 'none';
    seconds = 5;
    timer.textContent = seconds;

    countdownInterval = setInterval(updateTimer, 1000);

    setTimeout(showSurprise, 5000);
});

// ===============
// == STAR WARS ==
// ===============

const fetchButton = document.getElementById('fetchButton');
const charName = document.getElementById('charName');
const charGender = document.getElementById('charGender');
const charHeight = document.getElementById('charHeight');
const charMass = document.getElementById('charMass');
const charBirthYear = document.getElementById('charBirthYear');
const infoParagraph = document.getElementById('infoParagraph');

async function fetchRandomCharacter() {
    try {
        infoParagraph.textContent = 'Fetching data...';
        const response = await fetch('https://swapi.dev/api/people/');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        const characters = data.results;
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    } catch (error) {
        console.error('Error fetching data:', error);
        infoParagraph.textContent = 'Error fetching character data.';
        return null;
    }
}

function displayCharacter(character) {
    if (character) {
        charName.textContent = character.name;
        charGender.textContent = character.gender;
        charHeight.textContent = character.height;
        charMass.textContent = character.mass;
        charBirthYear.textContent = character.birth_year;
        infoParagraph.textContent = 'Character data fetched!';
        document.getElementById('characterInfo').style.display = 'block';
    } else {
        console.error('Error fetching character data.');
    }
}

fetchButton.addEventListener('click', async () => {
    const randomCharacter = await fetchRandomCharacter();
    displayCharacter(randomCharacter);
});
