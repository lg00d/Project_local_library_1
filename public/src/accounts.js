function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const { id } = account;
  let total = 0;
  for (let book in books) {
    const { borrows } = books[book];
    borrows.reduce((acc, element) => {
      if (element.id === id) {
        return total++
      } else {
        return total
      }
    }, 0);
  }

  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;

  let result = [];

  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
  });

  function getAuthorById(authors, id) {
    return authors.find((author) => author.id === id);
  }

  result = result.map((book) => {
    const author = getAuthorById(authors, book.authorId);
    const newBook = {
      ...book,
      author,
    };

    return newBook;
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
