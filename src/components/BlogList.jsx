import Blog from '../components/Blog'

const BlogList = ({ blogs }) => {
  return (
    <>
      <h2>Blog Posts</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </>
  )
}

export default BlogList
