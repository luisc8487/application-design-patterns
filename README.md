# Movie Fight Web Application [application-design-patterns]

## Project Overview

![movie-search](https://github.com/user-attachments/assets/8d95cb75-040a-497e-979c-36a240b03968)![movie-fight](https://github.com/user-attachments/assets/afe57851-a9bf-4618-9ff4-5c77e3c675f1)

This project is a Movie Fight Web Application that allows users to compare two movies side by side using key statistics such as box office earnings, number of awards, metascore, IMDb rating, and IMDb votes. The goal is to visually highlight which movie ranks higher in each category by using color-coordinat

### Key Features

- **Movie Comparison:**

  - Users can search for two different movies.
  - Data is extracted from the **Open Movie Database(OMDb) API**.
  - Side-by-side comparison of key stats:
    - **Box Office Earnings**
    - **Numbers of Awards**
    - **Metascore**
    - **IMDb Rating**
    - **IMDb Votes**

- **Visual Indicators**
  - Each stat is color-coordinated based on which movie ranks higher.
  - Clear visual cues make it easy for users to determine the better-performing movie.

### Technologies Used

- **HTML:** Structure of the web application.
- **CSS:** Styling and layout of the application.
- **JavaScript:** Core functionality and DOM manipulation.
- **Axios:** For making HTTP request to the OMDb API.
- **Async/await:** Handling asynchronous operations for fetching movie data.

### How It Works

1. Search Functionality:
   - Users enter the names of two movies in separate input fields.
   - The app fetches data for both movies using the OMDb API.
2. Data Extraction:
   - Relevant data points such as box office revenue, awards, metascore, IMDb rating, and IMDb votes are extracted.
3. Comparison Logic:
   - The app compares the stats of both movies.
   - Based on the comparsion, stats, are highlighted with different colors to indicate which movie performed better.
4. User Interface:
   - A clean and intuitive interface displays the results side by side.
   - Color coding provides quick visual feedback on the comparison outcome.

### How to Run the Project

1. Clone the repository.
2. Open the `index.html` file in your preferred browser.
3. Enter the names of two movies in the input fields.

## Testing
A `test/` folder been added to validate dropdown functionality using JavaScript and MochaJS. The test ensures: 
- The dropdown menu in the input text field **starts closed**.
- After searching, the dropdown **opens**.
- After searching, the dropdown **displays results**.

### Running Tests
To run the tests, first install Mocha globally:
```sh
npm install -g mocha
```
Preview the `index.html` file within the `test` folder.

## Project File Structure
```lua
application-design-patterns/
|-- test/
|    |-- autocomplete.test.js
|    |-- test.html
|-- autocomplete.js
|-- index.html
|-- index.js
|-- LICENSE
|-- README.md
|-- style.css
|-- utils.js
```