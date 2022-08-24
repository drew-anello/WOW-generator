// 
// reviewed with Rijk Van Zanten

// const options = { method: 'GET', headers: { Accept: 'application/json' } };

// fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

///////////////////////////////////////////////////////////////////////////////////    

//     const formElement = document.querySelector('form');
//     const yearElement = document.querySelector('.number');
//     const sliderElement = document.querySelector('#wow-slide');
//     const outputElement = document.querySelector('#output');
    
//     formElement.addEventListener('submit', async (e) => {
//         e.preventDefault();
    
//         const year = parseInt(yearElement.value);
//         const wowCount = parseInt(sliderElement.value);
    
//         const url = `https://owen-wilson-wow-api.herokuapp.com/wows/random?results=100&year=${year}&wow_in_movie=${wowCount}`;
    
        // const response = await fetch(url);
//         const movies = await response.json();
    
//         const html = movies.map((movie) => `
//             <li>
//                 <span class="movie-title">${movie.movie}</span>
//                 <video src="${movie.video['720p']}" controls></video>
//             </li>
//         `).join('');
    
//         outputElement.innerHTML = html;
//     });
    
    /**
     * Arrow functions
     * 
     * Shorthand for "function () {}"
     * 
     * Examples:
     * 
     * ```js
     * function example() {
     *   return 'hi';
     * }
     * 
     * // is (more or less) the same as
     * 
     * const example = function () {
     *   return 'hi';
     * }
     * 
     * // which can now also be written as
     * const example = () => {
     *   return 'hi';
     * };
     * 
     * // arrow functions can be written without `{}`, in which case it becomes the immediate return value
     * const example = () => 'hi';
     * ```
     * 
     * 
     * 
     * 
     * ==========================
     * Asynchronous code
     * 
     * Three different "styles" of doing async work
     * 
     * 1. (oldest) Callbacks
     * 
     * Fires your provided callback, whenever the internal thing is done. The callback is then called with an error or a result
     * 
     * ```js
     * doTheThing(function (error, result) {
     *   if (error) // do something
     *   // do something with result
     * });
     * ```
     * 
     * 2. Promises (sort of replacement of the above)
     * 
     * ```js
     * doTheThing()
     *   .then(function(result) {
     *     fetch(url)
     *       .then(function(thatResult) {
     *         // tad hard to read because it's so nested
     *       });
     *   });
     * ```
     * 
     * 3. Async/await is the solution for that "callback hell"
     * 
     * ```js
     * // In normal functions, you can just get the result in a variable:
     * const hi = sayHi('drew');
     * 
     * // What if you could just do that for "async" functions
     * const yearResponse = await fetch(url1);
     * const movieResponse = await fetch(url2 + yearResponse.year);
     * ```
     * 
     * 
     * 
     * 
     * =======
     * Getting stuff from objects
     * const obj = {
     *      '720p': '',
     *      name: 'drew',
     * }
    
    obj.name; // valid name
    obj['name']; // valid name
    
    obj.720p // this breaks, can't start with a number
    obj['720p']; // valid
     */

