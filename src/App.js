import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import View from './components/View';

const getDatafromLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}


export const App = () => {

  const [books, setbooks] = useState([getDatafromLS()]);

  const [title, settitle] = useState('')
  const [author, setauthor] = useState('')
  const [isbn, setisbn] = useState('')

  const handleAddBooksubmit = (e) => {
    e.preventDefault();

    let book = {
      title,
      author,
      isbn
    }
    setbooks([...books, book]);
    settitle('');
    setauthor('');
    setisbn('');
  }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])


  return (
    <div className='wrapper'>
      <h1>Fitness Club Registration</h1>
      <div className="main">
        <div className="form-container">
          <form autoComplete='off' className='form-group'
            onSubmit={handleAddBooksubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
              onChange={(e) => settitle(e.target.value)} value={title}
            ></input>
            <br></br>
            <label>Email</label>
            <input type="text" className="form-control" required
              onChange={(e) => setauthor(e.target.value)} value={author}></input>
            <br></br>
            <label>Contact Number</label>
            <input type="text" className='form-control' required
              onChange={(e) => setisbn(e.target.value)} value={isbn}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>Add </button>
          </form>

        </div>



        <div className="view-container">
          {books.length > 0 && <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                  </tr>

                </thead>
                <tbody>

                  <View books={books} />

                </tbody>

              </table>
            </div>
          </>}

          {books.length < 1 && <div>No books are added yet</div>}

        </div>
      </div>
    </div>
  )
}

export default App;
