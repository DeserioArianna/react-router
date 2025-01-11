import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${apiUrl}/posts/${id}`).then((resp) => {
            setPost(resp.data);
        });
    }, [id]);

    const handleGoBack = () => {
        navigate("/posts")
    }

    if (!post) {
        return (
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    };

    return (
        <div className="container mt-5">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {post.image && <img src={`${apiUrl}/${post.image}`} alt={post.title} />}
            <br />
            <button type="button" className="btn btn-outline-success mt-4" onClick={handleGoBack}>Indietro</button>
        </div>
    );
};

export default PostDetail;