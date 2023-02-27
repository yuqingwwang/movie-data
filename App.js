let movieData = {
  "The Darjeeling Limited": {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
    runtime: 151,
    rating: 7.2,
    year: 2007,
  },
  "The Royal Tenenbaums": {
    plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
    rating: 7.6,
    year: 2001,
    cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
    runtime: 170,
  },
  "Fantastic Mr. Fox": {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: [
      "George Clooney",
      "Meryl Streep",
      "Bill Murray",
      "Jason Schwartzman",
    ],
    runtime: 147,
    rating: 7.9,
  },
  "The Grand Budapest Hotel": {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
  },
};

let allFilms = Object.keys(movieData);
const [film1, film2, film3, film4 ] = allFilms;
const addButton = document.getElementById('addButton');

const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", handleToggle);
});

function handleToggle(event) {
  const button = event.target;
  const detailsDiv = button.nextElementSibling;
}

function handleToggle(event) {
  const button = event.target;
  const detailsDiv = button.nextElementSibling;

  if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
  } else {
    detailsDiv.style.display = "none";
  }
}

const container = document.getElementById('container');
const form = document.querySelector('form');

addButton.addEventListener("click", handleSubmit);

function formattedKey(key) {
  return key.charAt(0).toUpperCase() + key.slice(1)
}

function createElement(key, val) {
  const newElement = document.createElement('p');
  newElement.textContent = formattedKey(key) + ': '+ val;
  newElement.className = key;

  return newElement
}

function handleSubmit () {
  const newDiv = document.createElement("div");

  // adding film title as h3
  const name = document.getElementById('name').value;
  const nameElement= document.createElement('h3');
  nameElement.textContent = name;
  nameElement.className = 'name';
  newDiv.appendChild(nameElement);

  const inputList = ['cast', 'plot', 'rating', 'runtime', 'year'];

  // get the value of the other input fields (if filled)
  for (key of inputList) {
    const val = document.getElementById(key).value;

    if(val) {
      const newElement = createElement(key, val)
      newDiv.appendChild(newElement);
    }
  }
  container.appendChild(newDiv);
  // Reset the form
  form.reset();
}


let counter = 1;

for (const film of Object.keys(movieData)) {
  // set film title
  document.getElementById(`film${counter}`).querySelector('h3').textContent = film;

  // sort keys to make display consistent
  const sortedKeys = Object.keys(movieData[film]).sort();

  // change list of casts into string
  if (typeof(movieData[film].cast) !== 'string') {
    movieData[film].cast = movieData[film].cast.join(", ");
  }

  const details = document.createElement("div");
  details.className = 'hidden';
  details.id = `details${counter}`;
  details.style.display = 'none'; 
  document.getElementById(`film${counter}`).appendChild(details);

  // loop through all keys and add the elements
  for (const key of sortedKeys) {
    const p = document.createElement("p");
    p.className = key;
    p.innerHTML = formattedKey(key) + ': '+ movieData[film][key];
    document.getElementById(`details${counter}`).appendChild(p)
  }

  counter++;
}
