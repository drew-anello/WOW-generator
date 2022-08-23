// fetch api///
///////////////
let data

const options = { method: 'GET', headers: { Accept: 'application/json' } };
fetch('https://owen-wilson-wow-api.herokuapp.com/wows/ordered/0-90', options)
    .then(response => response.json())
    .then(response => {
        data = response
        console.log(data)
    })
    .catch (err => console.error(err));
// user submit form /
///////////////////////

const year = document.getElementsByClassName('number');
const form = document.getElementById('form');
const slider = document.getElementById('wowSlide');
const wow = document.querySelector('.submit')
// addEventListener('submit', function)

// function getYear [2011] {
// console.log([2011])
// }
wow.addEventListener('click', function () {
    let numberOfWowsCount = 0;
    let yearToMatch = parseInt(document.getElementById("wowYearInput").value);
    data.forEach(function(movie) {
        if(movie.year === yearToMatch)
            numberOfWowsCount += movie.total_wows_in_movie;
    })
    document.getElementsByClassName("numOfWow")[0].innerHTML = `Number of Wows: ${numberOfWowsCount}`;
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
});



// Sorting by year
///////////////////



