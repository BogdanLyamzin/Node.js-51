import {useState, useEffect} from "react";

import {getAll} from "../../utils/api/books";

const BookList = () => {
    const [books, setBooks] = useState(null);

    useEffect(()=> {
        const fetchBooks = async()=> {
            try {
                const data = await getAll();
                setBooks(data);
            }
            catch(error) {
                console.log(error.message);
            }
        }

        fetchBooks()
    }, []);

    if(!books) {
        return <p>...Loading</p>
    }

    const elements = books.map(({_id, title, author}) => <li key={_id}>{title}. Автор: {author}</li>);

    return (
        <ol>
            {elements}
        </ol>
    )
}

export default BookList;