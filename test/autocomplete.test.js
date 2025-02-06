it("Shows an autocomplete", () => {
  creatAutocomplete({
    root: document.querySelector("#target"),
    fetchApi(){
        return [
            {Title: 'Avenegers'},
            {Title: 'Not Avengers'},
            {Title: 'Some other movie'}
        ];
    },
    renderOption(movie) {
        return movie.Title;
    }
  });

  const dropdown = document.querySelector(".dropdown");
  
  expect(dropdown.className).not.to.include("is-active");
});
