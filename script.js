let button = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

const quotes = [
  {
    quote: `"Success is not final, failure is not fatal; It is the courage to continue that counts"`,
    author: "Winston Churchill",
  },
  {
    quote: `"If you can dream it, you can do it"`,
    author: "Walt Disney",
  },
  {
    quote: `"If you want something done, ask a busy person to do it"`,
    author: "Laura Ingalls Wilder",
  },
  {
    quote: `"If your actions inspire others to dream more, learn more, do more and become more, you are a leader"`,
    author: "John Quincy Adams",
  },
  {
    quote: `"The best way to find out if you can trust somebody is to trust them"`,
    author: "Ernest Hemingway",
  },
  {
    quote: `"Your time is limited, don't waste it living someone else's life"`,
    author: "Steve Jobs",
  },
  {
    quote: `"The road to success is always under construction"`,
    author: "Lily Tomlin",
  },
  {
    quote: `"The only limit to our realization of tomorrow will be our doubts of today"`,
    author: "Franklin D. Roosevelt",
  },
  {
    quote: `"The way to get started is to quit talking and begin doint"`,
    author: "Walt Disney",
  },
  {
    quote: `"Believe you can and you're halfway there"`,
    author: "Theodore Roosevelt",
  },
];

function random() {
  return Math.floor(Math.random() * quotes.length);
}

button.addEventListener("click", function () {
  let index = random();

  quote.innerText = quotes[index].quote;
  author.innerText = quotes[index].author;
});
