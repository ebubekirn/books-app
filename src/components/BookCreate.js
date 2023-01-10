import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/bookcontext';
import { addSelectedBook } from '../functions/http';
import BookPage from './BookPage';

export default function BookCreate() {
  const context = useContext(BookContext); 
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState({
    id: "",
    bookname: "",
    description: "",
    author: "",
    picture: "",
    recyled: false
  })

  const createBook = async () => {
    console.log("New Book", newBook)
    try {
      const id = await addSelectedBook(newBook);
      context.addBook({ ...newBook, id: id })
      alert(id)
      navigate("/")
    } catch (error) {
      alert(error)
    }
  }

  const onChangeText = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value })
  }

  return (
    <BookPage book={newBook} onChangeText={onChangeText} className={"btn btn-primary mt-3"} text={"Create"} handleBook={createBook} />
  )
}
