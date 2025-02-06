const waitFor = (selector) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve();
      }
    }, 30);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject();
    }, 2000);
  });
};

beforeEach(() => {
  document.querySelector("#target").innerHTML = "";
  creatAutocomplete({
    root: document.querySelector("#target"),
    fetchApi() {
      return [
        {Title: "Avenegers"},
        {Title: "Not Avengers"},
        {Title: "Some other movie"},
      ];
    },
    renderOption(movie) {
      return movie.Title;
    },
  });
});

it("Dropdown starts closed", () => {
  const dropdown = document.querySelector(".dropdown");

  expect(dropdown.className).not.to.include("is-active");
});

it("After searching dropsdown opens up", async () => {
  const input = document.querySelector("input");
  input.value = "Avengers";
  input.dispatchEvent(new Event("input"));

  await waitFor(".dropdown-item");

  const dropdown = document.querySelector(".dropdown");
  expect(dropdown.className).to.include("is-active");
});

it("After searching, displays some results", async () => {
  const input = document.querySelector("input");
  input.value = "Avengers";
  input.dispatchEvent(new Event("input"));

  await waitFor(".dropdown-item");

  const items = document.querySelectorAll(".dropdown-item");

  expect(items.length).to.equal(3);
});
