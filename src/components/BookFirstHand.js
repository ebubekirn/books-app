import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/bookcontext';
import BookTable from './BookTable';

export default function BookFirstHand() {
  const navigate = useNavigate();
  const bookCtx = useContext(BookContext);

  const firstHandBooks = bookCtx.books.filter((f) => {
    return (f.recyled === false)
  })

  useEffect(() => {
    if (firstHandBooks.length == 0) {
      navigate("/")
    }
  },[firstHandBooks.length])

  return (
    <div>
      <BookTable books={firstHandBooks} heading={"Book First Hand"} />
    </div>
  )
}
