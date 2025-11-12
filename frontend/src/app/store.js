import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import planReducer from '../features/plan/planSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plan: planReducer,
  },
})