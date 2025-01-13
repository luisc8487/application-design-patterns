# Movie Fight Web Application [application-design-patterns]

## Project Overview

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

    **HTML:** Structure of the web application.
    **CSS:** Styling and layout of the application.
    **JavaScript:** Core functionality and DOM manipulation.
    **Axios:** For making HTTP request to the OMDb API.
    **Async/await:** Handling asynchronous operations for fetching movie data.

### How It Works

1.  Search Functionality:
    - Users enter the names of two movies in separate input fields.
    - The app fetches data for both movies using the OMDb API.
