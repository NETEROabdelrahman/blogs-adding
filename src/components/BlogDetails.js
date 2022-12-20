import { useNavigate, useParams } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { error, isPending, data: blog } = useFetch(`http://localhost:8000/blogs/${id}`)
    console.log(blog)
const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',

        }).then(() => {
      navigate('/');
    }) 
}

    return (
        <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
                
      )}
    </div>
    );
}
 
export default BlogDetails;