import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PhotoProvider } from "./context/PhotoContext";
import PhotoGallery from "./components/PhotoGallery";
import UploadForm from "./components/UploadForm";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <PhotoProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PhotoGallery />} />
          <Route path="/upload" element={<UploadForm />} />
        </Routes>
      </Router>
    </PhotoProvider>
  );
};

export default App;
