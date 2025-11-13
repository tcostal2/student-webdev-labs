const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
const loadingImg = document.querySelector(`#loading`);
const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  app.style.display = "flex";
  app.style.flexDirection = "column";
  app.style.alignItems = "center";
  app.style.textAlign = "center";

  fetch(url)
    .then((response) => response.json())
    .then((books) => {
      if (loadingImg) {
        loadingImg.remove();
      }

      books.forEach((book) => {
        const bookEl = document.createElement(`div`);
        bookEl.classList.add(`mb-4`);

        const title = document.createElement(`h2`);
        title.textContent = book.name;

        const author = document.createElement(`p`);
        author.textContent = `by ${book.authors.join(", ")}`;

        const year = document.createElement(`p`);
        year.textContent = new Date(book.released).getFullYear();

        const pages = document.createElement(`p`);
        pages.textContent = `${book.numberOfPages} pages`;

        bookEl.append(title, author, year, pages);
        app.appendChild(bookEl);
      });
    });
};

fetchData(url);
