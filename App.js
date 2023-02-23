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

const [film1, film2, film3, film4 ] = Object.keys(movieData)

// loop through four films
for (let i = 1; i < 5; i++) {

  const filmName = Object.keys(movieData)[i-1];

  document.getElementById(`film${i}`).querySelector('h2').textContent = filmName;

  const sortedKeys = Object.keys(movieData[filmName]).sort();

  // change list of casts into string
  movieData[filmName].cast = movieData[filmName].cast.join(", ");

  // loop through all keys
  for (const key of sortedKeys) {
    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
    const p = document.createElement("p");
    p.className = key;
    p.innerHTML = formattedKey + ': '+ movieData[filmName][key];
    document.getElementById(`film${i}`).appendChild(p)
  }
}

const addButton = document.getElementById('addButton');
const container = document.getElementById('container');
const form = document.querySelector('form');

addButton.addEventListener("click", handleSubmit);

function handleSubmit () {
  const newDiv = document.createElement("div");

  const name = document.getElementById('name').value;
  const nameElement= document.createElement('h2');
  nameElement.textContent = name;
  nameElement.className = 'name';
  newDiv.appendChild(nameElement);

  const inputList = ['cast', 'plot', 'rating', 'runtime', 'year'];

  // get the value of the input field
  for (key of inputList) {
    const val = document.getElementById(key).value;

    if(val) {
      const newElement = document.createElement('p');
      newElement.textContent = key + ': '+ val;
      newElement.className = key;
      newDiv.appendChild(newElement);
    }
  }
  container.appendChild(newDiv);
  // Reset the form
  form.reset();
}
