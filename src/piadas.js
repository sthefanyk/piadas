const jokeElement = document.getElementById('joke');
const responseElement = document.getElementById('response');
const dogImageElement = document.getElementById('dogImage');

getJoke();

let jokeData;

function getJoke() {
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt').then(response => {
        responseElement.textContent = "Resposta";
        dogImageElement.innerHTML = '';
        jokeData = response.data;

        jokeElement.textContent = jokeData.setup;
    }).catch(error => console.log("Erro ao buscar a piada" + error))
}

function getResponse() {
    responseElement.textContent = jokeData.delivery;
    getDogImage();
}

function getDogImage() {
    axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
        const urlImage = response.data.message;
        console.log(urlImage);

        dogImageElement.innerHTML = `<img src="${urlImage}" alt="Cachorro engraçado">`
    }).catch(error => console.log("Erro ao buscar a imagem" + error));
}