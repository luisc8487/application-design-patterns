const autoCompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
      <img src= "${imgSrc}"/>
      ${movie.Title} (${movie.Year})
    `;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchApi(searchTerm) {
    const res = await axios.get("http://www.omdbapi.com", {
      params: {
        apikey: "4125f1c2",
        s: searchTerm,
      },
    });
    if (res.data.Error) {
      return [];
    }
    return res.data.Search;
  },
};

creatAutocomplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#left-summary"), "left");
  },
});

creatAutocomplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onMovieSelect(movie, document.querySelector("#right-summary"), "right");
  },
});

let leftMovie, rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
  const res = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "4125f1c2",
      i: movie.imdbID,
    },
  });

  summaryElement.innerHTML = movieTemplate(res.data);

  if (side === "left") {
    leftMovie = res.data;
  } else {
    rightMovie = res.data;
  }

  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  console.log(leftSideStats);
};

const movieTemplate = (movieDetails) => {
  const dollars = parseInt(
    movieDetails.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  );
  const metascore = parseInt(movieDetails.Metascore);
  const imdbRating = parseFloat(movieDetails.imdbRating);
  const imdbVotes = parseInt(movieDetails.imdbVotes.replace(/,/g, ""));

  const awards = movieDetails.Awards.split(" ").reduce((prev, word) => {
    const value = parseInt(word);

    if (isNaN(value)) {
      return prev;
    } else {
      return prev + value;
    }
  }, 0);

  console.log(awards);
  console.log(dollars, metascore, imdbRating, imdbVotes);

  return `
        <article class="media">
            <article class="media-left">
                <figure class="image">
                    <img src="${movieDetails.Poster}" alt="${movieDetails.Title}" />
                </figure>
            </article>
            <div class="media-content">
                <div class="content">
                  <h1>${movieDetails.Title}</h1>
                  <h4>${movieDetails.Genre}</h4>
                  <p>${movieDetails.Plot}</p>
                </div>
            </div>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.BoxOffice}</p>
            <p class="subtitle">Box Office</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.Metascore}</p>
            <p class="subtitle">Metascore</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
        </article>
    `;
};
