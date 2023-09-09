const MessageData = {
  messages: [
    "I Lovu You Moyna",
    "Sorry Moyna",
    "Happy Birthday Monuuu",
    "Hi ! Purnota",
    "Hi ! Poltur Ma",
    "Keep Smiling",
    "Kemon Aso Baby",
    "I Love You Bulbuli",
    "Maaf Kore Daoooo",
  ],
};

// Get a random message from the array
const messages = MessageData.messages;
const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];

const jokeElement = document.getElementById("showMessage");
jokeElement.innerHTML = randomMessage;


// console.log(randomMessage);




