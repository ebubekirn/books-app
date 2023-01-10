import React, { useEffect, useContext, useState } from 'react'
import { BookContext } from '../context/bookcontext';
import { getBooks } from '../functions/http'
import BookTable from './BookTable';

export default function BookList() {
  
//   const [user, setUser] = useState({
//     "id": 0,
//     "name": "",
//     "role": ""
//   })
//   const [loggedin, setLoggedin] = useState(false);

  const bookCtx = useContext(BookContext)

  useEffect(() => {
    async function getAllBooks() {
      try {
        const books = await getBooks();
        bookCtx.sortDesc(books); // context te saklamış olduk.
      } catch (error) {
        console.log(error)
      }
    }
    getAllBooks()
  }, [])

  // useEffect(() => {
  //    let text = localStorage.getItem("user")
  //    let obj = JSON.parse(text)
  // },[])

  return (
    <div>
      <BookTable books={bookCtx.books} heading={"Book List"} />
    </div>
  )
}
