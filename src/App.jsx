import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  const handleAddToBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    // console.log(bookmarks);
  }

  return (
    <>
      <div className='container mx-auto'>

        <Header></Header>
        <main className='grid md:grid-cols-3 gap-6 my-6 space-y-4'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </main>



      </div>

    </>
  )
}

export default App
