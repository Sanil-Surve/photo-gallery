import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const PhotoContext = createContext();

const photoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTOS':
      return { ...state, photos: action.payload };
    case 'ADD_PHOTO':
      return { ...state, photos: [...state.photos, action.payload] };
    default:
      return state;
  }
};

const PhotoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(photoReducer, { photos: [] });

  const fetchPhotos = async () => {
    const response = await axios.get('http://localhost:8080/api/photos/photos');
    dispatch({ type: 'SET_PHOTOS', payload: response.data });
  };

  const uploadPhoto = async (formData) => {
    const response = await axios.post('http://localhost:8080/api/photos/upload', formData);
    dispatch({ type: 'ADD_PHOTO', payload: response.data });
  };

  return (
    <PhotoContext.Provider value={{ ...state, fetchPhotos, uploadPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export { PhotoContext, PhotoProvider };