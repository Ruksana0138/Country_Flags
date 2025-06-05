import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import countriesReducer from '../features/countriesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    countries: countriesReducer
  }
});