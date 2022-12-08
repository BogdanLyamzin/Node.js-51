const books = require("./books")

const invokeAction = async({action, id, title, author}) => {
    switch(action) {
        case "list":
            const bookList = await books.listBooks();
            console.log(bookList);
            break;
        case "getById":
            const oneBook = await books.getById(id);
            console.log(oneBook);
            break;
        case "add":
            const newBook = await books.add({title, author});
            console.log(newBook)
            break;
        case "deleteById": 
            const deleteBook = await books.deleteById(id);
            console.log(deleteBook);
            break;
        break;
        default: 
            console.log("Unknown action")
    }
}

// invokeAction({action: "list"})
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"})
// invokeAction({action: "add", title: "Worm", author: "Джон Маккрей"})
// invokeAction({action: "deleteById", id: "PuF1O52DkiuR4onp0LUsC"})