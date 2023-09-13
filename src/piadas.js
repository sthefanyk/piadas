const jokeElement = document.getElementById('joke');
const responseElement = document.getElementById('response');
const dogImageElement = document.getElementById('dogImage');

getJoke();

let jokeData;

function getJoke() {
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt').then(response => {
        responseElement.textContent = "Resposta";
        jokeData = response.data;

        jokeElement.textContent = jokeData.setup;
    })
}

function getReact() {
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
        responseElement.textContent = "Resposta";
        jokeData = response.data;

        jokeElement.textContent = jokeData.setup;
    })
}

function getResponse() {
    responseElement.textContent = jokeData.delivery;
}

function getImage() {
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
        const urlImage = response.data.message;

        jokeElement.textContent = jokeData.setup;
    })
}