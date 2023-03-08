const dataMovies = [
	{
		movieId: 1,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/sHim6U0ANsbzxcmNRYuIubBVQaz.jpg",
		rating: 86,
		title: "Attack On Titan",
		date: "Apr 07, 2013",
	},
	{
		movieId: 2,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
		rating: 88,
		title: "The Last of Us",
		date: "Jan 15, 2023",
	},
	{
		movieId: 3,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/130H1gap9lFfiTF9iDrqNIkFvC9.jpg",
		rating: 79,
		title: "A Man called Otto",
		date: "Dec 28, 2022",
	},
	{
		movieId: 4,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
		rating: 73,
		title: "Creed III",
		date: "Mar 01, 2023",
	},
	{
		movieId: 5,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg",
		rating: 69,
		title: "Sayen",
		date: "Mar 03, 2023",
	},
	{
		movieId: 6,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
		rating: 76,
		title: "Babylon",
		date: "Dec 22, 2022",
	},
	{
		movieId: 7,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
		rating: 85,
		title: "The Mandalorian",
		date: "Nov 12, 2019",
	},
	{
		movieId: 8,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/cyawjtxqR4XesB5sJuwV4SsMmuc.jpg",
		rating: 60,
		title: "Love at First Kiss",
		date: "Mar 03, 2023",
	},
	{
		movieId: 9,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/5C9rerMqV1X0jnRdbbsM1BswVI2.jpg",
		rating: 71,
		title: "Magic Mike's Last Dance",
		date: "Feb 09, 2023",
	},
	{
		movieId: 10,
		picture:
			"https://www.themoviedb.org/t/p/w440_and_h660_face/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
		rating: 80,
		title: "The Whale",
		date: "Dec 09, 2022",
	},
];
function sortAsc() {
	const dataMoviesAsc = dataMovies.sort((a, b) => a.rating - b.rating);
	console.log(dataMoviesAsc);
	return dataMoviesAsc;
	// console.log(sortedAsc);
	// return sortedAsc.map((x) => {
	// 	customElements.get("card-element").innerHTML += `
	//     <div>
	//     <div class="image">
	//         <div class="wrapper">
	//             <a class="image" href="${x.picture}" title="${x.title}">
	//                     <img loading="lazy" class="poster" src="${x.picture}" alt="">
	//             </a>
	//         </div>
	//     </div>
	//     <div>
	//         <a href="#">
	//             <image class="dotdot" loading="lazy" src="../assets/dots-circle-horizontal.svg" alt="">
	//         </a>
	//     </div>
	//     <div class="content">
	//         <div class="consensus tight">
	//             <div class="outer_ring">
	//                 <div class="user_score_chart 5256daaf19c2956ff60b72ac" data-percent="86.0" data-track-color="#204529" data-bar-color="#21d07a">
	//                     <div class="percent">
	//                         <span class="icon icon-r86"></span>
	//                     </div>
	//                     <canvas height="68" width="68" style="height: 34px; width: 34px;"></canvas></div>
	//                 </div>
	//             </div>
	//             <h2><a href="/tv/1429" title="Attack on Titan">${x.title}</a></h2>
	//             <p>${x.date}</p>
	//         </div>
	//         <div class="hover 1429"></div>
	//     </div>
	// </div>`;
	// });
}

function sortDesc() {
	const dataMoviesDesc = dataMovies.sort((a, b) => b.rating - a.rating);
	console.log(dataMoviesDesc);
	return dataMoviesDesc;

	// sortedDesc.map((x) => {
	// 	customElements.get("card-element").innerHTML += `
	//     <div>
	//     <div class="image">
	//         <div class="wrapper">
	//             <a class="image" href="${x.picture}" title="${x.title}">
	//                     <img loading="lazy" class="poster" src="${x.picture}" alt="">
	//             </a>
	//         </div>
	//     </div>
	//     <div>
	//         <a href="#">
	//             <image class="dotdot" loading="lazy" src="../assets/dots-circle-horizontal.svg" alt="">
	//         </a>
	//     </div>
	//     <div class="content">
	//         <div class="consensus tight">
	//             <div class="outer_ring">
	//                 <div class="user_score_chart 5256daaf19c2956ff60b72ac" data-percent="86.0" data-track-color="#204529" data-bar-color="#21d07a">
	//                     <div class="percent">
	//                         <span class="icon icon-r86"></span>
	//                     </div>
	//                     <canvas height="68" width="68" style="height: 34px; width: 34px;"></canvas></div>
	//                 </div>
	//             </div>
	//             <h2><a href="/tv/1429" title="Attack on Titan">${x.title}</a></h2>
	//             <p>${x.date}</p>
	//         </div>
	//         <div class="hover 1429"></div>
	//     </div>
	// </div>`;
	// });
}

function CardCustom(data) {
	data.map((x) => {
		document.getElementById("box").innerHTML += `
            <div>
            <div class="image">
                <div class="wrapper">   
                    <a class="image" href="${x.picture}" title="${x.title}">
                            <img loading="lazy" class="poster" src="${x.picture}" alt="">
                    </a>           
                </div>
            </div>
            <div>
                <a href="#">
                    <image class="dotdot" loading="lazy" src="../assets/dots-circle-horizontal.svg" alt="">
                </a>
            </div>
            <div class="content">
                <div class="consensus tight">
                    <div class="outer_ring">
                        <div class="user_score_chart 5256daaf19c2956ff60b72ac" data-percent="86.0" data-track-color="#204529" data-bar-color="#21d07a">
                            <div class="percent">
                                <span class="icon icon-r86"></span>
                            </div>
                            <canvas height="68" width="68" style="height: 34px; width: 34px;"></canvas></div>
                        </div>
                    </div>
                    <h2><a href="#" title=${x.title}>${x.title}</a></h2>
                    <p>${x.date}</p>
                </div>
                <div class="hover"></div>
            </div>
        </div>`;
	});
}
CardCustom(dataMovies);
