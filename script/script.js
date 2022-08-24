// Vars
const formEl = document.querySelector('form');
const yearEl = document.querySelector('.number');
const sliderEl = document.querySelector('#wow-slide');



// user submit form

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    const year = parseInt(yearEl.value)
    const wowCount = parseInt(sliderEl.value);
    console.log(sliderEl);
    
})

