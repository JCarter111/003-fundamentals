class Library {
  constructor(books) {
    this.books = books;
  }

  add(newBook) {
    this.books.push(newBook);
  }

  remove(oldBook) {
    //keep all books except book that has ISBN that we want to remove
    const keptBooks = books.filter(function(oldBook) {
      if (this.books.ISBN === oldBook.ISBN) {
        return false;
      } else {
        return true;
      }
    });    
   //update books
   this.books = remove(oldBook); 
  }
module.exports = Library;