import axios from 'axios';
import { useEffect, useState } from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts').then((resp) => {
      setPosts(resp.data.posts);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1>Lista dei Post</h1>
      <div className="row mt-5">
        <div className="col d-flex justify-content-between flex-wrap row-gap-4">
          {posts.length > 0 ? (
            posts.map((curPost) => (
              <div className="card" key={curPost.id}>
                <div className="card-body">
                  <h4 className="card-title">{curPost.title}</h4>
                  <p className="card-text">{curPost.content}</p>
                  {curPost.image && <img src={`http://localhost:3000/${curPost.image}`} alt={curPost.title} />}
                </div>
              </div>
            ))
          ) : (
            <p className="fs-3">Non ci sono post</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
