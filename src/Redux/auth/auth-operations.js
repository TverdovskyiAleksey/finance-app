import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://finance-app-south-back.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3002';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const options = {
  autoClose: 3000,
  hideProgressBar: false,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
  closeOnClick: true,
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/register', credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Creation error, please try again', options);
      } else if (error.response.status === 500) {
        toast.error('Server error, please try later', options);
      } else {
        toast.error(`${error.message}`, options);
      }
      return rejectWithValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/login', credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      toast.error('Please try again', options);
      return rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/api/auth/logout');
      token.unset();
    } catch (error) {
      toast.error("Hey! You can't log out!", options);
      return rejectWithValue(error);
    }
  },
);

const fetchCarrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      toast('Please login or register!', options);
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/users/current');
      return data;
    } catch (error) {
      toast('Authorization timed out!', options);
      return thunkAPI.rejectWithValue();
    }
  },
);
// eslint-disable-next-line import/no-anonymous-default-export
export default { register, logIn, logOut, fetchCarrentUser };
