// Vars
const formEl = document.querySelector('form');
const yearEl = document.querySelector('.number');
const sliderEl = document.querySelector('#wow-slide');
const outputEl = document.querySelector('#output');



// user submit form

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const year = parseInt(yearEl.value);
    const wowCount = parseInt(sliderEl.value);

    // connecting api
    const url = `https://owen-wilson-wow-api.herokuapp.com/wows/random?results=100&year=${year}&wow_in_movie=${wowCount}`;

    const response = await fetch(url);
    const movies = await response.json();

    const html = movies.map((movies) => 
    )


    
})

