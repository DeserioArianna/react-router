import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts">
            <Route index element={<PostsPage />} />
            <Route path=":id" element={<PostDetail />} />
            <Route path= "create" element={<CreatePost />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;