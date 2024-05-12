import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookCard from './BookCard'
import '../css/Book.css'

const Books = ({role}) => {
    const [books, setBooks] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:3001/book/books')
        .then(res => {
            setBooks(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
    }, [])
    return (
    <div className='content-book'>
        <div className='book-list'>
            {
            books.map(book => {
               return <BookCard key = {book.id} book = {book} role = {role}></BookCard>
            })
        }

        </div>
    </div>
    )
}

export default Books
