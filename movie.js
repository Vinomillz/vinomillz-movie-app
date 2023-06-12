// document.getElementById("popupx").addEventListener("click", function(){
//     document.querySelector("#popup").getElementsByClassName.display = "flex";
// })

function appear() {
	document.querySelector(".mobile_nav").style.left = "0";
	console.log("appear");
}
function closex() {
	document.querySelector(".mobile_nav").style.left = "100%";
	console.log("close");
}



// collation
trend = document.getElementsByClassName("scroll");


// trailer api call

const latest_trailers = document.getElementById("latest_trailers");

IMG_URL = "https://image.tmdb.org/t/p/w500";

getMovies(
	"https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045"
);

function getMovies(url) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			showMovies(data.results);
			console.log(data);
		});
}

function showMovies(data) {
	latest_trailers.innerHTML = "";
	data.forEach((movie) => {
		const { title, backdrop_path, release_date } = movie;
		const movieEl = document.createElement("div");
		movieEl.classList.add("movie");
		movieEl.innerHTML = `<img src= "${IMG_URL + backdrop_path}" alt="${title}">
        
         <div class="movie-info">
            <h4>${title}</h4>
 <span class="green"> ${release_date}</span>
        </div>
        `;
		latest_trailers.appendChild(movieEl);
	});
}
