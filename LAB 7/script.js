document.getElementById("fetchBooks").addEventListener("click", fetchBooks);

function fetchBooks() {
    const apiUrl = "books.json";

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((books) => {
            displayBooks(books);
        })
        .catch((error) => {
            console.error("Error fetching books:", error);
        });
}

function displayBooks(books) {
    const bookListDiv = document.getElementById("bookList");
    bookListDiv.innerHTML = "";

    books.forEach((book) => {
        const bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} by ${book.author}`;
        bookListDiv.appendChild(bookInfo);
    });
}
