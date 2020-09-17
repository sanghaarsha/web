const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//Get Quote From API
async function getQuote() {
    const proxyUrl = "https://ancient-hamlet-75603.herokuapp.com/";
    const apiUrl =
        "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        // If author is blank add 'Unknown'
        if (data.quoteAuthor === "") {
            authorText.innerText = "Unknown";
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        // Reducing font size for very long quotes
        if (data.quoteText.length > 110) {
            quoteText.classList.add("long-quote");
        } else {
            quoteText.classList.remove("long-quote");
        }
        // Adding quote text to html element
        quoteText.innerText = data.quoteText;
    } catch (error) {
        getQuote();
    }
}
// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, "_blank");
}

// Event Listners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On Load
getQuote();
