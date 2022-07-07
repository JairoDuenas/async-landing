const API =
  "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US";

const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fb4186052cmsh6e3fc9ee5031b00p1dd9c4jsn57f5a8fbae4a',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const tracks = await fetchData(API);
    let view = `
    ${tracks.item.map(track => `
    <div class="group relative">
      <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none" >
      <img src="${track.images.background}" alt="${track.subtitle}" class="w-full" />
      </div>
      <div class= "mt-4 flex justify-between" >
        <h3 class="text-sm text-gray-700" >
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${track.title}
        </h3>
      </div>
    </div>
    `
      )
      .slice(0, 5)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
