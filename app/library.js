class Library {
  constructor(books) {
    this.books = books;
  }

  add(newBook) {
    this.books.push(newBook);
  }

  remove(oldBook) {
    //keep all books except book that has ISBN that we want to remove
 
    const keptBooks = this.books.filter(function(book) {
      if (book.ISBN === oldBook.ISBN) {
        return false;
      } else {
        return true;
      }
    });    
   //update books
   
   this.books = keptBooks;
  }  
}
module.exports = Library;
