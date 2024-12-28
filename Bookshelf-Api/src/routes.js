import {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookById,
  deleteBookById,
} from "./handler.js";

const routes = [
  // Add a new book
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },

  // Get all books
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },

  // Get book by ID
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },

  // Update book by ID
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookById,
  },

  // Delete book by ID
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookById,
  },
];

export { routes };
