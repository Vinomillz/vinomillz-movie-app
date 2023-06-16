// document.getElementById("popupx").addEventListener("click", function(){
//     document.querySelector("#popup").getElementsByClassName.display = "flex";
// })
free = document.getElementById("free");

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

// creating local data

const FreeToWatch = [
	{
		id: 1,
		name: "spirited",
		trailer: "https://www.themoviedb.org/video/play?key=BG8O0bj4isg",
		download:
			"https://www.sabishare.com/file/HWHWmsKzs12-spirited-2022-netnaija-com-mkv",
		img: "images/spirited.jpg",
		alt: "Spirited 2022",
		text: "2022",
	},

	{
		id: 2,
		name: "Poker Face",
		trailer: "https://www.themoviedb.org/video/play?key=UH5uGZ9SW7A",
		download:
			"https://www.sabishare.com/file/ZvnIJDSLz35-poker-face-2022-netnaija-com-mkv",
		img: "images/pokerFace.jpg",
		alt: "poker face",
		text: "2023",
	},
	{
		id: 3,
		name: "Enola Holmes 2",
		trailer: " https://www.themoviedb.org/video/play?key=KKXNmYoPkx0",
		download:
			"https://www.sabishare.com/file/qZDPqjHVS78-enola-holmes-2-2022-netnaija-com-mkv",
		img: "images/enolaHolmes_2.jpg",
		alt: "Enola Holmes 2",
		text: "2022",
	},
	{
		id: 4,
		name: "The Woman King",
		trailer: " https://www.themoviedb.org/video/play?key=3RDaPV_rJ1Y",
		download:
			"https://downloadwella.com/a2asi3srlkzc/The.Woman.King.(NKIRI.COM).2022.WEBRip.DOWNLOADED.FROM.NKIRI.COM.mkv.html",
		img: "images/Thewomanking.jpg",
		alt: "The woman king",
		text: "(2022)",
	},
	{
		id: 5,
		name: "Soólè",
		trailer: " https://www.youtube.com/watch?v=T_uJZHxcplk",
		download:
			"https://www.sabishare.com/file/wqNvRsxBh57-soole-2021-netnaija-com-mkv",
		img: "images/soole.jpg",
		alt: "Soole",
		text: "(2021)",
	},
	{
		id: 6,
		name: "Hitman's Holiday",
		trailer: " https://www.themoviedb.org/video/play?key=eN7eA3_Hn_g",
		download:
			"https://downloadwella.com/llh2qycx7b3i/Accident.Man.Hitmans.Holiday.(NKIRI.COM).2022.WEBRip.DOWNLOADED.FROM.NKIRI.COM.mkv.html",
		img: "images/hitman_holiday.jpg",
		alt: "hitman holiday",
		text: "(2022)",
	},
	{
		id: 7,
		name: "Hellraiser",
		trailer: " https://www.themoviedb.org/video/play?key=c2kU2-Tpsbs",
		download:
			"https://www.sabishare.com/file/boYmwBoXx83-hellraiser-2022-netnaija-com-mkv",
		img: "images/hellraiser(2022).jpg",
		alt: "Hellraiser",
		text: "(2022)",
	},
	{
		id: 8,
		name: "Jeepers Creepers",
		trailer: " https://www.themoviedb.org/video/play?key=X68NG1ST_TQ",
		download:
			"https://www.sabishare.com/file/fwglMqNsu82-jeepers-creepers-reborn-2022-netnaija-com-mkv",
		img: "images/jeepers_creepers.jpg",
		alt: "Jeepers Creepers",
		text: "(2022)",
	},
	{
		id: 9,
		name: "Anikulapo",
		trailer: " https://www.themoviedb.org/video/play?key=rXIKrHPaB-o",
		download:
			"https://www.sabishare.com/file/ivdYsYarL77-anikalupo-2022-netnaija-com-mkv",
		img: "images/anikulapo.jpg",
		alt: "Anikulapo",
		text: "(2022)",
	},
	{
		id: 10,
		name: "Samaritan",
		trailer: " https://www.themoviedb.org/video/play?key=9FKnTxSC16E",
		download:
			"https://www.sabishare.com/file/WPNNCytPq20-samaritan-2022-netnaija-com-mp4",
		img: "images/samaritan.jpg",
		alt: "Samaritan",
		text: "(2022)",
	},
];

window.addEventListener("DOMContentLoaded", function () {
	console.log("has the site loaded completed");
	let displayFree = FreeToWatch.map(function (item) {
		// console.log(item)
		return `<div class="scroll">
					
					<a
						href= ${item.trailer}
						target="_blank"
					>
						<img src=${item.img} alt=${item.alt} />
					</a>
					<h3>${item.name}</h3>
					<span>${item.text}</span>
					<br />
					<a
						href="${item.download}"
						target="_blank"
					>
						<button class="button" type="submit">Download</button>
					</a>
					<div class="overlay">
						<i id="playbtn" class="fa-solid fa-play"><p>Trailer</p></i>
					</div>
				</div>`;
	});
	displayFree = displayFree.join("");
	// console.log(displayFree);
	free = document.getElementById("Free");
	free.innerHTML = displayFree
});

// preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function (){
	preloader.classList.add("hide-preloader");
});
