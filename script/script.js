import { movie, year, video } from './wows'
// Vars
const formEl = document.querySelector('form')
const yearEl = document.querySelector('.number')
const sliderEl = document.querySelector('#wow-slide')
const outputEl = document.querySelector('#output')

formEl.addEventListener('submit', async e => {
  e.preventDefault()

  const year = parseInt(yearEl.value)
  const wowCount = parseInt(sliderEl.value)

  // connecting api
  const url = `https://owen-wilson-wow-api.herokuapp.com/wows/random?results=100&year=${year}&wow_in_movie=${wowCount}`

  const response = await fetch(url)
  const movies = await response.json()

  // appear on page
  const html = movies
    .map(
      movie => ` 
    <li>
        <span class="movie-title">${movie.movie}</span>
        <video src="${movie.video['1080p']}" controls></video>
        </li>
    `
    )
    .join('')
  outputEl.innerHTML = html
})
