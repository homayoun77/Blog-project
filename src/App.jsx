import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./components/blogs/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./shared/ScrollToTop";
import Header from "./components/header/Header";
import AuthorsPage from "./pages/AuthorsPage";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
