const Library = require("../app/library");
const Book = require("../app/books");

test("Check that a library can be instantiated with some books", () => {
  
    // Add some books here
    const book1 = new Book ("Fantastic Mr Fox", "Roald Dahl", 789);
    const book2 = new Book("Site Reliability Engineering", "Richard Murphy", 456);
    const book3 = new Book("Don't Make Me Think","Steve Krug",123);

    const library = new Library([book1,book2,book3]);

 // library.books.add()
  expect(library.books).toEqual([
    // How should the books look?
   book1,book2,book3
  ]);
});

test("Check that a book can be added to the library", () => {

  const book1 = new Book ("Fantastic Mr Fox", "Roald Dahl", 789);
  const book2 = new Book("Site Reliability Engineering", "Richard Murphy", 456);
  const book3 = new Book("Don't Make Me Think","Steve Krug",123);
  const book4 = new Book("Growth Mindset","Carol Dweck",992);

  const library = new Library([book1, book2, book3]);
  // library.books.add()
  library.add(book4);
  expect(library.books).toEqual([book1, book2, book3, book4]);
});
test("Check that a book can be removed from the library", () => {

  const book1 = new Book ("Fantastic Mr Fox", "Roald Dahl", 789);
  const book2 = new Book("Site Reliability Engineering", "Richard Murphy", 456);
  const book3 = new Book("Don't Make Me Think","Steve Krug",123);
  const book4 = new Book("Growth Mindset","Carol Dweck",992);

  const library = new Library([book1, book2, book3,book4]);
  // library.books.add()
  library.remove(book2);
  expect(library.books).toEqual([book1, book3, book4]);
});
