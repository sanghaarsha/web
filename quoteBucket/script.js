const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//Get Quote From API
async function getQuote() {
    // this proxy server was taken down by heroku
    // const proxyUrl = "https://ancient-hamlet-75603.herokuapp.com/";
    // const apiUrl =
    //     "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

    const apiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";

    try {
        // const response = await fetch(proxyUrl + apiUrl);
        const response = await fetch(apiUrl);
        const result = await response.json();
        const data = result.quotes[0];

        // If author is blank add 'Unknown'
        if (data.author === "") {
            authorText.innerText = "Unknown";
        } else {
            authorText.innerText = data.author;
        }
        // Reducing font size for very long quotes
        if (data.text.length > 110) {
            quoteText.classList.add("long-quote");
        } else {
            quoteText.classList.remove("long-quote");
        }
        // Adding quote text to html element
        quoteText.innerText = data.text;
    } catch (error) {
        getQuote();
        console.error("Error while fetching quote. Retrying!!");
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
