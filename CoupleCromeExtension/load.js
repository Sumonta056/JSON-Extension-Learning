
const jsonData = {
  messages: [
    "I Lovu You Moyna",
    "Sorry Moyna",
    "Happy Birthday Monuuu",
    "Hi ! Purnota",
    "Hi Poltur Ma",
  ],
};

// Get a random message from the array
const messages = jsonData.messages;
const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];

const jokeElement = document.getElementById("showMessage");
jokeElement.innerHTML = randomMessage;






