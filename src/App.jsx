import { useState, useEffect } from 'react'
import blogService from './services/blogs'

import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  return (
    <div>
      <h1>Blog List Frontend</h1>
      { user === null ? '' : `Username '${user.username}' is logged in` }
      { user === null
        ? <LoginForm setUser={setUser} />
        : <BlogList blogs={blogs} /> }
    </div>
  )
}

export default App
