function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let returnedBooks = []
  let notReturned = []

  books.forEach((book) => {

    if (book.borrows[0].returned) {
      returnedBooks.push(book)
    } else {
      notReturned.push(book)
    }

  })
  result.push(notReturned);
  result.push(returnedBooks);

  return result
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    return { ...borrow, ...account }
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
