const quoteTypeSelect = document.getElementById('quote-type');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const quoteContainer = document.getElementById('quote-container');
const quoteDisplay = document.getElementById('quote');
const authorDisplay = document.getElementById('author');

//quote data
const quotes = {
    inspiration: [
        {
            quote: 'Belive and you are haliway there.',
            author: 'Theodore Roosevelt'
        },
        {
             quote: 'It does not matter how slowly you go as long as you do not stop',
            author: 'Confucius'
        }
    ],
    motivation: [
        {
            quote: 'Sucess is not final, Failure is not fatal: it is the courage to continue that counts.',
            author: 'Winston Churchill'
        },
        {
             quote: 'Don\'t watch the clock, do what it does . Keep going',
            author: 'Sam Levenson'
        }
    ],
};


let currentQuoteType = quoteTypeSelect.value;
let currentQuoteIndex = 0;

displayQuote();

quoteTypeSelect.addEventListener('change',(e) => {
    currentQuoteType = e.target.value;
    currentQuoteIndex = 0;
    displayQuote();
});

prevBtn.addEventListener('click',() =>{
    currentQuoteIndex--;
    if (currentQuoteIndex < 0){
        currentQuoteIndex = quotes[currentQuoteType].lenght - 1;
    }
    displayQuote();
});

nextBtn.addEventListener('click',() =>{
    currentQuoteIndex++;
    if (currentQuoteIndex >= quotes[currentQuoteType].lenght){
        currentQuoteIndex = 0;
    }
    displayQuote();
});

function displayQuote() {
    const currentQuote = quotes[currentQuoteType][currentQuoteIndex];
    quoteDisplay.innerText = currentQuote.quote;
    authorDisplay.innerText = `- ${currentQuote.author}`;
}