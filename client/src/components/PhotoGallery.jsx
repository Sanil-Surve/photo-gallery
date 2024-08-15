import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PhotoContext } from "../context/PhotoContext";
import "./PhotoGallery.css"; 

const PhotoGallery = () => {
  const { photos, fetchPhotos } = useContext(PhotoContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleUploadForm = () => {
    navigate("/upload");
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <React.Fragment>
      <button className="btn" onClick={handleUploadForm}>Upload Form</button>
      <div className="gallery-container">
        {photos.map((photo) => (
          <div key={photo._id} className="photo-card">
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
            <p className="photo-date">Uploaded on: {formatDate(photo.createdAt)}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default PhotoGallery;
