const {program} = require("commander")

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

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-t, --title <type>")
    .option("-at, --author <type>");

program.parse();

const options = program.opts();
invokeAction(options)