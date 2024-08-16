// import React, { createContext, useReducer } from 'react';
// import axios from 'axios';

// const PhotoContext = createContext();

// const photoReducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_PHOTOS':
//       return { ...state, photos: action.payload };
//     case 'ADD_PHOTO':
//       return { ...state, photos: [...state.photos, action.payload] };
//     default:
//       return state;
//   }
// };

// const PhotoProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(photoReducer, { photos: [] });

//   const fetchPhotos = async () => {
//     const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/photos/photos`);
//     dispatch({ type: 'SET_PHOTOS', payload: response.data });
//   };

//   const uploadPhoto = async (formData) => {
//     const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/photos/upload`, formData);
//     dispatch({ type: 'ADD_PHOTO', payload: response.data });
//   };

//   return (
//     <PhotoContext.Provider value={{ ...state, fetchPhotos, uploadPhoto }}>
//       {children}
//     </PhotoContext.Provider>
//   );
// };

// export { PhotoContext, PhotoProvider };

// src/PhotoProvider.js
import React, { createContext, useReducer } from 'react';
import api from '../api'; // Import the Axios instance

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
    try {
      const response = await api.get(`/api/photos/photos`);
      dispatch({ type: 'SET_PHOTOS', payload: response.data });
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const uploadPhoto = async (formData) => {
    try {
      const response = await api.post(`/api/photos/upload`, formData);
      dispatch({ type: 'ADD_PHOTO', payload: response.data });
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  return (
    <PhotoContext.Provider value={{ ...state, fetchPhotos, uploadPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export { PhotoContext, PhotoProvider };