import React from 'react'

export const View = ({ books }) => {
  return books.map(book => (
    <tr key={book.isbn}>
      <td>{book.isbn}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>

    </tr>
  ))
}

export default View
