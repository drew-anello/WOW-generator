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
function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()
    if (userInput === '') return;


    $.ajax(URL + userInput).then(function (data) {

        $('main').append('')
        $title.text(data.Title)
        $year.text(data.Year)
        $numberOfWows.text(data.totalWowsInMovie)
        $wowCount.text(data.currentWowinMovie)
        $('main').append(`<video src="${data.video}" alt="${data.audio}" controls/>`)
        $input.val('')

    })

}



