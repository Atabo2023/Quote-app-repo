"use strict";

const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor`,
  },
  {
    quote: `"The kingdom of God suffer violet and the violet taketh by force"`,
    person: `victor`,
  },
  {
    quote: `"Desperation is the key to success"`,
    person: `David`,
  },
  {
    quote: `"The best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor`,
  },
  {
    quote: `"Always remember to do something new everyday"`,
    person: `Isa`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `pelumi`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `chidubem`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor senior enginneer`,
  },
  {
    quote: `"The best way to learn is by continous practice"`,
    person: `Isa`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
