"use strict";

const btn = document.querySelector("#new-button");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `Victor`,
  },
  {
    quote: `"The best way to learn is by continuous paratice and ask questions, however to understand what you learn it is parament you practice it as well as try to do something your self, de research"`,
    person: `Isa`,
  },
  {
    quote: `"the best way to find ur self is to loose ur self in the service of other"`,
    person: `David`,
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
