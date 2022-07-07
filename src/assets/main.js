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
    const musics = await fetchData(API);
    let view = `
    ${musics.tracks.map((music) => `
    <div class="group relative">
      <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none" >
      <img src="${music.images.coverart}" alt="${music.subtitle}" class="w-full" />
      </div>
      <div class= "mt-4 flex justify-between" >
        <a href="${music.share.href}" class="text-sm text-gray-700" >
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${music.title}
        </a>
      </div>
    </div>
    `).slice(0, 20).join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
