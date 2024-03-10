// Define an array of quotes
const quotes = [
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. - Mark Twain",
  "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
  "If you can dream it, you can do it. - Walt Disney",
  "It is during our darkest moments that we must focus to see the light. - Aristotle"
];

// Generate a random number between 0 and the length of the quotes array
const randomIndex = Math.floor(Math.random() * quotes.length);

// Get the quote at the random index
const randomQuote = quotes[randomIndex];

// Display the quote
console.log(randomQuote);
//10
