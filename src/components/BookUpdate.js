import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { BookContext } from '../context/bookcontext';
import { getBook, updateSelectedBook } from '../functions/http';
import BookPage from './BookPage';

export default function BookUpdate() {
  const location = useLocation();
  const context = useContext(BookContext);
  const navigate = useNavigate();

  const [selectedBook, setSelectedBook] = useState({
    bookname: "",
    description: "",
    author: "",
    picture: "",
    recyled: false
  });

  // 1.YOL
  useEffect(() => {
    getBook(location.state.id).then((res) => {
      setSelectedBook(res.data)
    })
  }, [])

  // 2. YOL
  // useEffect(() => {
  //   setSelectedBook(location.state.book)
  // }, [])

  const onChangeText = (event) => {
    setSelectedBook({ ...selectedBook, [event.target.name]: event.target.value })
  }

  const EditBook = async () => {
    try {
      await updateSelectedBook(location.state.id, selectedBook);
      context.updateBook(location.state.id, selectedBook);
      alert(selectedBook.bookname + " " + "Güncellendi");
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <BookPage book={selectedBook} text={"Update"} className={"btn btn-success mt-3"} onChangeText={onChangeText} handleBook={EditBook} />
  )
}
