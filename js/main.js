/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/


//SEND a data requests to http://www.omdbapi.com/?apikey=9f2dc9af




//SEND a data requests to http://www.omdbapi.com/?apikey=9f2dc9af

const searchBar = document.createElement('input');
searchBar.setAttribute('type', 'text')
searchBar.setAttribute('id', 'movie-search');
searchBar.setAttribute('placeHolder', 'eg. Truman show');
document.body.appendChild(searchBar);

const searchBtn = document.createElement('button');
searchBtn.setAttribute('id', 'search-btn');
searchBtn.innerHTML= ("Search");
document.body.appendChild(searchBtn);



searchBtn.addEventListener('click', async function fetchData(){
     try{
         const response = await fetch('http://www.omdbapi.com/?apikey=9f2dc9af&s=' + searchBar.value)
         const movies = await response.json ();
         console.log(movies)
         
          for (movi of movies.Search){
             console.log(movi);
             document.getElementById('movie-list').innerHTML += `
             <article>
                 <h2>${movi.Title}</h2>
                 <img src= '${movi.Poster}'>
             </article>`
 
          }
    } catch (error){
         console.log(error);
     }
 })

