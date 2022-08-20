// Var's
const URL = 'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=10&sort=movie&direction=desc';
console.log(URL)
const $form = $('form');
let $input = $('input[type="text"]')
let $year = $('#year');
let $numberOfWows = $('#wowInMovie')
let $wowCount = $('#numberWow')

// Event Listener (submit button)

$form.on('submit', handleGetData)

// Functions 

$.ajax(URL+userInput).then(function (data) {
  
    $('main').append('')
})





