document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Fetch error:', error);
        displayError();
    }
}

function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.innerText = post.title;

        const bodyElement = document.createElement('p');
        bodyElement.innerText = post.body;

        const hrElement = document.createElement('hr');

        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        postElement.appendChild(hrElement);

        outputDiv.appendChild(postElement);
    });
}

function displayError() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clearing existing content for error message

    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = 'Error fetching data';
    outputDiv.appendChild(errorParagraph);
}
