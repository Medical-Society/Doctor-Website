import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDoctor } from '../../interfaces';
import Cookies from 'js-cookie'

export interface AuthState {
  token: string | null;
  doctor: IDoctor | null;
}

const initialState: AuthState = {
  token: null,
  doctor: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginReducer: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.doctor = action.payload.doctor;
      Cookies.set('token', action.payload.token || '');
      Cookies.set('doctor', JSON.stringify(action.payload.doctor) || '');
    },
    logoutReducer: (state) => {
      state.token = null;
      state.doctor = null;
      Cookies.remove('token');
      Cookies.remove('doctor');
    },
    updateDoctor: (state, action: PayloadAction<IDoctor>) => {
      state.doctor = action.payload;
      Cookies.set('doctor', JSON.stringify(action.payload));
    },
  },
});

export const { loginReducer, logoutReducer, updateDoctor } = authSlice.actions;

export default authSlice.reducer;