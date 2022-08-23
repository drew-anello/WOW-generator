// fetch api///
///////////////
const options = { method: 'GET', headers: { Accept: 'application/json' } };
fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random', options)

    .then((response) => {
        const data = response.json()
})
  .then((data) => console.log(data))
    .catch(err => console.error(err));
// user submit form /
///////////////////////

const year = document.getElementsByClassName('number');
const form = document.getElementById('form');
const slider = document.getElementById('wowSlide');
const wow = document.querySelector('.submit')
// addEventListener('submit', function)

wow.addEventListener('click', function () {
    
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
});


// Sorting by year
///////////////////



