import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoContext } from '../context/PhotoContext';
import './UploadForm.css'; 

const UploadForm = () => {
  const { uploadPhoto } = useContext(PhotoContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);

    await uploadPhoto(formData);
    navigate("/")
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
      />
      <button type="submit">Upload Photo</button>
    </form>
  );
};

export default UploadForm;