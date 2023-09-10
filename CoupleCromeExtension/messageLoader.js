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
    "You are my everything",
    "Your smile is my happiness",
    "I Love You Moyna In Every Moment",
    "I Love You Moyna In Every Second",
    "I Love You Moyna In Every Minute",
    "I Love You Moyna In Every Hour",
    "I Love You Moyna In Every Day",
    "You are best patner of my life",
    "You are my best friend",
    "You are the best wife in the world",
    "Sorry Sorry Sorry",
    "I Love You Babe",
    "I can't live without you",
    "You are my world",
    "Miss You Moyna",
    "রাগ বা দুঃখ কষ্ট যাই হোক তুমি আমার সব কিছু",
    "Tumi eto shundor keno???",
    "Tomar rup dekhe amar mon bhalo hoiya jai",
    "ময়না আজকে তোর হাত ধরতে পারলাম না",
    "ময়না আজকে তোর কাছে যাতে পারলাম না",
    "Bhalobasha Dao Bhalobasha Nao",
    "আম গাছে আম ফলে কুমড়ো ফলে চালে দূর থেকে kiss দিলাম তুলে নাও গালে",
    "বন্ধু তুমি একা হলে আমায় দিও ডাক তোমার সাথে গল্প করবো আমি সারা রাত" ,
    "রাজার যেমন রাজ্য থাকে আমার আছো তুমি",
    "তোমায় ছাড়া কেমনে আমি থাকি ভালো?",
    "জলে যখন নেমেছি মাছ আমি ধরবোই প্রেম যখন করেছি বিয়ে আমি তোমাকেই করবো",
    "I'm not just falling in love with you. I'm falling into you. You're an ocean, and i'm falling in, drowing in depths of who you are.",
    "I shine for youu 🤭",
    "দিন শেষে শুধু আমি আর তুমি : রাগ না হয় পরের দিন আবার করো 🤭🤭",
    "হে সখা, মম হৃদয়ে রহো 🤎",
    "পেয়েছো কি আমার পাঠানো সেই ফুল??",
  ],
};

// Get a random message from the array
const messages = MessageData.messages;
const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];

const jokeElement = document.getElementById("showMessage");
jokeElement.innerHTML = randomMessage;


// console.log(randomMessage);




