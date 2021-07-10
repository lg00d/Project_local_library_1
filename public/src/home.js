//let {
//findAuthorById
//} = require("./books.js");

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

function cleanUpResponse(array) {
  array.sort((a, b) => b.count - a.count);
  if (array.length > 5) {
    return array.slice(0, 5);
  }

  return array
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
  return cleanUpResponse(mostCommon);
}

function getMostPopularBooks(books) {
  return cleanUpResponse(books.map((book) => {
    return { name: book.title, count: book.borrows.length }
  }))
}

function getMostPopularAuthors(books, authors) {
  const result = []

  books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    const fullName = `${author.name.first} ${author.name.last}`;

    const newAuthorInfo = {
      name: fullName,
      count: book.borrows.length,
    };

    if (result.find((x) => x.name == fullName) == undefined)
      result.push(newAuthorInfo)
  })

  // sort the new array by count: greatest to least


  return cleanUpResponse(result);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
