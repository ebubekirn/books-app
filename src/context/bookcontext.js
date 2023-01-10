import { createContext, useReducer } from "react";
import { } from "../functions/http";

export const BookContext = createContext(
    {
        books: [],
        sortDesc: (books) => { },
        addBook: ({ bookName, author, description }) => { },
        deleteBook: (id) => { },
        updateBook: ({bookName, author, description}) => {},
    }
)

function bookReducer(state, action) {
    switch (action.type) {
        case "SORTD":
            // Reducer veriyi saklamaya ve üzerinde oynamaya yarıyor. state yerine book gelecek. (Yani saklanacak veri geliyor.) action da ise yapacağımız değişikliği belirlemiş olacağız.(Add, delete, update case leri de ekleyeceğiz.)
            const inverted = action.payload.reverse();
            return inverted;
        case "DELETE":
            return state.filter((book) => book.id !== action.payload)
        case "ADD":
            return [action.payload, ...state]
        case "UPDATE":
            const updatableBookIndex = state.findIndex(
                (book) => book.id === action.payload.id
            );
            const updatableBook = state[updatableBookIndex];
            const updateItem = { ...updatableBook, ...action.payload.data };
            const updateBooks = [...state];
            updateBooks[updatableBookIndex] = updateItem;
            return updateBooks;
        default:
            return state
    }
}

function BookProvider({ children }) {
    const [booksState, dispatch] = useReducer(bookReducer, [])
    function sortDesc(books) { // bu fonksiyonu çağıracağız.
        dispatch({ type: 'SORTD', payload: books })
    }

    function deleteBook(id) {
        dispatch({ type: 'DELETE', payload: id })
    }

    function addBook(bookData) {
        dispatch({ type: 'ADD', payload: bookData})
    }

    function updateBook(id, bookData) {
        dispatch({ type: 'UPDATE', payload:{ id: id, data: bookData }})
    }

    const value = {
        books: booksState,
        sortDesc: sortDesc,
        addBook: addBook,
        deleteBook: deleteBook,
        updateBook: updateBook,
    };

    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider;
