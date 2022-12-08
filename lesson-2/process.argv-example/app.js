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

const actionIncex = process.argv.indexOf("--action")

if(actionIncex !== -1) {
    const action = process.argv[actionIncex + 1];
    invokeAction({action})
}