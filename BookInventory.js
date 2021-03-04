
const Book= require('./Book');

class BookInventory{
    constructor(){
        this.books = [];
        this.inventoryCost = 0;
    }

    Push(book){
        let newBook  = new Book(book);
        this.books.push(newBook);
        return "New Book Pushed!";
    }

    Pop(){
        return this.books.pop();
    }

    FindBook(name){
        return this.books.find( 
            e =>  e.name.toLowerCase() === 
            name.toLowerCase()) || 'Book Not Found!';
    }

    RemoveBook(index){
        this.books.splice(index-1, 1);
        return 'Book Removed!'
    }

    GetBooks(){
        return this.books.reduce( (ac, cv) => {
            return {...ac, [cv.name]: cv};
        }, {});
    }

    GetCost(){
        return this.books.reduce( (ac,cv) => ac + cv.price , 0);
    }

}

const invetory1 = new BookInventory();
let book1 = {
    name: 'Risk Hai Toh Ishq Hai',
    author: 'Pawan Tiwari',
    pages: 398,
    price: 299
}
let book2 = {
    name: 'Dark Horse',
    author: 'Abhiskek',
    pages: 69,
    price: 96
}

invetory1.Push(book1);
invetory1.Push(book2);
// console.log(invetory1.Pop());
// console.log(invetory1.FindBook('dark horse'));
// console.log(invetory1.RemoveBook(1));
// console.log(invetory1.GetBooks());
console.log(invetory1.GetCost());