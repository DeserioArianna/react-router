import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;



const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/posts`).then((resp) => {
      setPosts(resp.data.posts);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${apiUrl}/posts/${id}`)
      .then((resp) => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("Errore durante l'eliminazione del post");
      });
  };

  return (
    <div className="container mt-5">
      <h1>Lista dei Post</h1>
      <div className="row mt-5">
        <div className="col d-flex justify-content-between flex-wrap row-gap-4">
          {posts.length > 0 ? (
            posts.map((curPost) => (
              <div className="card" key={curPost.id}>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to={`/posts/${curPost.id}`}>{curPost.title}</Link></h4>
                  <p className="card-text">{curPost.content}</p>
                  {curPost.image && <img src={`${apiUrl}/${curPost.image}`} alt={curPost.title} />}
                  <br />
                  <button className="mt-3" onClick={() => handleDelete(curPost.id)}>🗑️ Elimina</button>
                </div>
              </div>
            ))
          ) : (
            <p className="fs-3">Non ci sono post</p>
          )}
        </div>
      </div>
      <Link className="btn btn-primary mt-4" to="/posts/create">Aggiungi Post</Link>
    </div>
  );
};

export default PostsPage;
