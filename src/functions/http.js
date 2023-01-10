import axios from 'axios'

const url = 'https://books-97b90-default-rtdb.firebaseio.com/';

export async function getBooks() {
    const response = await axios.get(url + '/books.json')

    const books = []

    for (const key in response.data) {
        const booksObj = {
            id: key,
            author: response.data[key].author,
            description: response.data[key].description,
            bookname: response.data[key].bookname,
            picture: response.data[key].picture,
            recyled: response.data[key].recyled
        }
        books.push(booksObj)
    }
    return books
}

export async function addSelectedBook(book) {
    const response = await axios.post(url + 'books.json', book)
    alert(response.data.name)
    const id = response.data.name
    return id
}

export function updateSelectedBook(id, bookData) {
    return axios.put(url + `books/${id}.json`, bookData)
}

export function getBook(id) {
    return axios.get(url + `books/${id}.json`)
}

export function deleteSelectedBook(id) {
    return axios.delete(url + `books/${id}.json`)
}