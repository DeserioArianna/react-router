import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const initialData = {
  title: "",
  content: "",
  image: "",
};

function CreatePostPage() {
  const [formData, setFormData] = useState(initialData);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const keyToChange = event.target.name;

    const newData = {
      ...formData,
      [keyToChange]: event.target.value,
    };

    setFormData(newData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit", formData);

    // Invia i dati al backend (il server si aspetta title, content, image)
    axios
      .post(`${apiUrl}/posts`, formData)
      .then((resp) => {
        console.log("Post creato con successo!");
        // Naviga alla lista dei post
        navigate(`/posts/${resp.data.id}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Errore durante la creazione del post");
      });
  };

  return (
    <>
      <section>
        <h3>Crea un nuovo post</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="title">Titolo del post</label>
            <input
              type="text"
              id="title"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="content">Contenuto del post</label>
            <textarea
              id="content"
              className="form-control"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image">URL dell'immagine del post</label>
            <input
              type="text"
              id="image"
              className="form-control"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Crea il Post
          </button>
        </form>
      </section>
    </>
  );
}

export default CreatePostPage;