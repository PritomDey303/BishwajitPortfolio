import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import GalleryImagesUpload from "./pages/GalleryImagesUpload/GalleryImagesUpload";
import PasswordPage from "./pages/PasswordPage/PasswordPage";
function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Gallery />} />
        <Route
          path="/upload-gallery"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <GalleryImagesUpload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/password"
          element={<PasswordPage setAuthenticated={setAuthenticated} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
