// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
	preloader.classList.add("hide-preloader");
});

// define your terms
free = document.getElementById("free");
trending = document.getElementById("trending");

// hamburger menu
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

// creating local data for trending

const TrendingMovies = [
	{
		id: 1,
		name: "Extraction 2",
		trailer: "https://www.themoviedb.org/video/play?key=mi4pEsYeljk",
		download:
			"https://www.sabishare.com/file/UjLMnZjGu63-extraction-2-2023-netnaija-com-mkv",
		img: "images/extraction2.jpg",
		alt: "extraction 2 ",
		text: "(2023)",
	},
	{
		id: 2,
		name: "Fast X",
		trailer: "https://www.themoviedb.org/video/play?key=32RAq6JzY-w",
		download:
			"https://www.sabishare.com/file/RvIRGUBRm09-fast-x-2023-netnaija-com-mkv",
		img: "images/FastX.jpg",
		alt: "Fast and furios x ",
		text: "(2023)",
	},
	{
		id: 3,
		name: "Dungeons & dragons",
		trailer: "https://www.themoviedb.org/video/play?key=MHXWY_gPzMw",
		download:
			"https://www.sabishare.com/file/yMqWVkBxK26-dungeons-and-dragons-honor-among-thieves-2023-netnaija-com-mkv",
		img: "images/dungeonsanddragons.jpg",
		alt: "Dungeons and drgaons",
		text: "Honor Among Thieves",
	},
	{
		id: 4,
		name: "The pope's Exorcist",
		trailer: "https://www.themoviedb.org/video/play?key=Eq1hj7MoJio",
		download:
			"https://www.sabishare.com/file/FjHRnWoFt98-the-popes-exorcist-2023-netnaija-com-mkv",
		img: "images/popeExorcist.jpg",
		alt: "The pope's exorcist 2023",
		text: "Horror, mystery.. (2023)",
	},
	{
		id: 5,
		name: "Ant Man & Wasp",
		trailer: "https://www.themoviedb.org/video/play?key=ZlNFpri-Y40",
		download:
			"https://www.sabishare.com/file/NadjBuJSn80-ant-man-and-the-wasp-quantumania-2023-netnaija-com-mkv",
		img: "images/quant.jpg",
		alt: "ant man and the wasp : quantumania",
		text: "Quantumania (2023)",
	},
	{
		id: 6,
		name: "Shazam 2 ",
		trailer: "https://www.themoviedb.org/video/play?key=S3L32B4T5Mo",
		download:
			"https://www.sabishare.com/file/plUMScnnz30-shazam-fury-of-the-gods-2023-netnaija-com-mkv",
		img: "images/shazam2.jpg",
		alt: "Shazam 2",
		text: "Fury Of The Gods",
	},
	{
		id: 7,
		name: "Avatar ",
		trailer: "https://www.themoviedb.org/video/play?key=a8Gx8wiNbs8",
		download:
			"https://www.sabishare.com/file/SyoOTXVLg35-avatar-the-way-of-water-2022-hc-hdrip-netnaija-com-mkv",
		img: "images/avatar.jpg",
		alt: "Avatar the way of water",
		text: "The Way Of Water",
	},
	{
		id: 8,
		name: "Creed III ",
		trailer:
			"https://movie-app-dusky-eight.vercel.app/movie/677179-creed-iii/watch",
		download:
			"https://downloadwella.com/38joyoo1cjef/Creed.III.(NKIRI.COM).2023.WEBRip.DOWNLOADED.FROM.NKIRI.COM_(1).mkv.html",
		img: "images/creed3.jpg",
		alt: "Creed III",
		text: "",
	},
	{
		id: 9,
		name: "Gangs Of Lagos",
		trailer: "https://www.themoviedb.org/video/play?key=TBLNplnMVzA",
		download:
			"https://www.sabishare.com/file/yAlRrvvCo08-gangs-of-lagos-2023-netnaija-com-mkv",
		img: "images/gangsOfLagos.jpg",
		alt: "Gangs of lagos",
		text: "April 7th 2023",
	},
	{
		id: 10,
		name: "Everything",
		trailer: "https://www.themoviedb.org/video/play?key=wxN1T1uxQ2g",
		download:
			"https://www.sabishare.com/file/SAvoqDEol43-everything-everywhere-all-at-once-2022-netnaija-com-mp4",
		img: "images/everythingeverywhere.jpg",
		alt: "Everything everywhere all at once",
		text: "Everywhere All ...",
	},
	{
		id: 11,
		name: "Luther (2023)",
		trailer: "https://www.themoviedb.org/video/play?key=EGK5qtXuc1Q",
		download:
			"https://downloadwella.com/to8dc04kv9th/Luther.The.Fallen.Sun.(NKIRI.COM).2023.NF.WEBRip.DOWNLOADED.FROM.NKIRI.COM.mkv.html",
		img: "images/luther.jpg",
		alt: "Luther the fallen sun",
		text: "The fallen sun",
	},
	{
		id: 12,
		name: "Batman (2023)",
		trailer: "https://www.themoviedb.org/video/play?key=5OzP3grTnz8",
		download:
			"https://www.sabishare.com/file/rRJbMiVDg58-batman-the-doom-that-came-to-gotham-2023-netnaija-com-mkv",
		img: "images/batmanThe.jpg",
		alt: "Batman",
		text: "The Doom",
	},
	{
		id: 13,
		name: "Die Hart (2023)",
		trailer: "https://www.youtube.com/watch?v=KdIZy26RcJk",
		download:
			"https://www.sabishare.com/file/EMNmnnBqp61-die-hart-2023-netnaija-com-mkv",
		img: "images/dieHart.jpg",
		alt: "Die Hart",
		text: "Official Movie",
	},
	{
		id: 14,
		name: "Black Panther",
		trailer: "https://www.youtube.com/watch?v=_Z3QKkl1WyM",
		download:
			"https://www.sabishare.com/file/okJYfygtc09-black-panther-wakanda-forever-2022-netnaija-com-mkv",
		img: "images/blackPanther.jpg",
		alt: "Black Panther ",
		text: "Wakanda Forever",
	},
	{
		id: 15,
		name: "Plane",
		trailer: "https://www.youtube.com/watch?v=7-6_Ulo7mdk",
		download:
			"https://www.sabishare.com/file/CpdxAmYtM31-plane-2023-netnaija-com-mkv",
		img: "images/plane2023.jpg",
		alt: "Plane 2023 movie ",
		text: "Official Movie",
	},
	{
		id: 16,
		name: "Legion",
		trailer: "https://www.youtube.com/watch?v=DKNjOwuBDbo",
		download:
			"https://www.sabishare.com/file/kmrdNNCgf67-legion-of-super-heroes-2023-netnaija-com-mkv",
		img: "images/legionOfSuperheroes.jpg",
		alt: "Legion of superheroes animation",
		text: "Of SuperHeroes",
	},
	{
		id: 17,
		name: "Black Adam",
		trailer: "https://www.youtube.com/watch?v=X0tOpBuYasI",
		download:
			"https://www.sabishare.com/file/yIvjUSYdJ35-black-adam-2022-hc-hdrip-netnaija-com-mkv",
		img: "images/blackAdam.jpg",
		alt: "Black adam 2023",
		text: "Official Movie",
	},
	{
		id: 18,
		name: "Puss in Boots",
		trailer: "https://www.youtube.com/watch?v=RqrXhwS33yc",
		download:
			"https://www.thenetnaija.net/videos/movies/17847-puss-in-boots-the-last-wish-2022",
		img: "images/pussInBoots.jpg",
		alt: "Puss in boots",
		text: "Official Movie",
	},
	{
		id: 19,
		name: "Devotion",
		trailer: "https://www.youtube.com/watch?v=NCDEGP6VjYY",
		download:
			"https://www.sabishare.com/file/iTjcajDAk31-devotion-2022-netnaija-com-mkv",
		img: "images/devotion.jpg",
		alt: "Devotion",
		text: "Official Movie",
	},
	{
		id: 20,
		name: "Violent Night",
		trailer: "https://www.youtube.com/watch?v=a53e4HHnx_s",
		download:
			"https://www.sabishare.com/file/ecSQNNTlR62-violent-night-2022-netnaija-com-mkv",
		img: "images/violentnight.jpg",
		alt: "Violent Night ",
		text: "Official Movie",
	},
	{
		id: 21,
		name: "Sonic ",
		trailer: "https://www.youtube.com/watch?v=G5kzUpWAusI",
		download:
			"https://www.sabishare.com/file/UwbMEnhEl70-sonic-the-hedgehog-2-2022-netnaija-com-mp4",
		img: "images/sonicTheHedgehog2.jpg",
		alt: "Sonic The Hedgehog 2",
		text: "The Hedgehog 2",
	},
	{
		id: 22,
		name: "The Next",
		trailer: "https://www.themoviedb.org/video/play?key=lJ5CRBeaKxk",
		download:
			"https://netnaijafiles.xyz/6e1062548d3b9845/The_Next_365_Days_(2022)_(NetNaija.xyz).mp4",
		img: "images/365Days2.jpg",
		alt: "365 DAYS THE NEXT",
		text: "365 Days",
	},
	{
		id: 23,
		name: "Infintiy Pool",
		trailer: "https://www.themoviedb.org/video/play?key=PVnIMvVEkrA",
		download:
			"https://netnaijafiles.xyz/6c13951448094c73/Infinity_Pool_(2023)_(NetNaija.xyz).mkv",
		img: "images/infinityPool.jpg",
		alt: "Infinity Pool",
		text: "Horror",
	},
	{
		id: 24,
		name: "Sex Appeal",
		trailer: "https://www.themoviedb.org/video/play?key=A207HN4bRJM",
		download:
			"https://netnaijafiles.xyz/8011ed7fc0f1b380/Sex_Appeal_(2022)_(NetNaija.xyz).mp4",
		img: "images/sexAppeal.jpg",
		alt: "Sex Appeal",
		text: "Official Movie",
	},
];

window.addEventListener("DOMContentLoaded", function () {
	console.log("has the site loaded completed for trending");
	let displaytrend = TrendingMovies.map(function (item) {
		// console.log(item)
		return `<div class="scroll">
					
					<a
						href= ${item.trailer}
						target="_blank"
					>
						<img  src=${item.img} alt=${item.alt} onclick="youTubePopup()" />
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
	displaytrend = displaytrend.join("");
	// console.log(displayFree);
	trending = document.getElementById("trending");
	trending.innerHTML = displaytrend;
});
// creating local data for free to watch

const FreeToWatch = [
	{
		id: 11,
		name: "Hypnotic",
		trailer: "https://www.themoviedb.org/video/play?key=FH41kJyzssI",
		download:
			"https://www.sabishare.com/file/vArPTuaaY03-hypnotic-2023-netnaija-com-mkv",
		img: "images/Hypnotic.jpg",
		alt: "Hypnotic 2023",
		text: "2023",
	},
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
						<img  src=${item.img} alt=${item.alt} onclick="youTubePopup()" />
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
	free.innerHTML = displayFree;
});

function youTubePopup() {
	console.log("This is the youtube popup");
	console.log(trailer);
}
