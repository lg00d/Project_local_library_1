const {
  findBookById, findAuthorById
} = require("./books.js");

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = 0;
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      borrowed++;
    }
  });
  return borrowed;
}

function getMostCommonGenres(books) {
  const result = books.map((book) => book.genre);
  const mostCommon = [];
  //map over book genres
  result.map((genre) => {
    //check to see if genre already exists in array
    const genreLocation = mostCommon.findIndex((element) => element.name === genre);
    //if it exists, increase count by 1
    if (genreLocation >= 0) {
      mostCommon[genreLocation].count = mostCommon[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      mostCommon.push({ name: genre, count: 1 });
    }
  });
  mostCommon.sort((a, b) => b.count - a.count);
  if (mostCommon.length > 5) {
    return mostCommon.slice(0, 5);
  } t
  return mostCommon;
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return { name: book.title, count: book.borrows.length }
  }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  const result = []

  books.map((book) => {
    const author = findAuthorById(authors, book.authorId)
    const fullName = `${author.name.first} ${author.name.last}`;

    const newAuthorInfo = {
      name: fullName,
      count: bookt.borrows.length,
    };

    if (result.find((x) => x.name == fullName) == undefined)
      result.push(newAuthorInfo)
  })

  // sort the new array by count: greatest to least
  result.sort((authorA, authorB) => authorB.count - authorA.count);

  // limit array to 5
  result.splice(5);

  console.log(result)

  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
