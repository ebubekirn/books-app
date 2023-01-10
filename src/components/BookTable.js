import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/bookcontext';
import { deleteSelectedBook } from '../functions/http'

export default function BookTable({ heading, books }) {
    const context = useContext(BookContext);
    const navigate = useNavigate();

    const deleteBook = async (id) => {
        try {
            await deleteSelectedBook(id)
            context.deleteBook(id)
        } catch (error) {
            console.log(error)
        }
    }

    // 1. YOL
    const updateBook = async (id) => {
        navigate("/book/update/" + id, {
            state: { id: id }
        })
    }

    // 2. YOL
    // const updateBook = async (book) => {
    //     navigate("/book/update/", {
    //         state: { book: book }
    //     })
    // }

    var render = books.map((b) => {
        return (
            <tr key={b.id}>
                <td><img src={b.picture} width="75px" /></td>
                <td className='align-middle'>{b.bookname}</td>
                <td className='align-middle'>{b.description}</td>
                <td className='align-middle'>{b.author}</td>
                <td>
                    <button
                        className='btn btn-success'
                        onClick={() => {         // 1. Yol
                            updateBook(b.id)
                        }}
                        // onClick={() => {      // 2. Yol
                        //     updateBook(b)
                        // }}
                    >Update</button>
                </td>
                <td>
                    <button
                        className='btn btn-danger'
                        onClick={() => {
                            deleteBook(b.id)
                        }}
                    >Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <div className='row'>
                <div className='col-md-7'>
                    <h3 className='text-center text-uppercase font-weight-bold'>{heading}</h3>
                    <button className='btn btn-primary' onClick={() => navigate("/book/create")}>New Book</button>
                    <table className='table table-hover table-striped table-bordered shadow-lg p-3 mb-5 bg-white rounded mt-3' >
                        <thead className='table-dark'>
                            <tr>
                                <th>Picture</th>
                                <th>Book Name</th>
                                <th>Description</th>
                                <th>Author</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {render}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
