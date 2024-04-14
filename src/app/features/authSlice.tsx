import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
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
  },
})

export const { loginReducer, logoutReducer } = authSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export const selectDoctor = (state: RootState) => state.auth.doctor;

export default authSlice.reducer;