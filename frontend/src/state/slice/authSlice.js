import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    addauth: (state) => {
      state.value = true
    },

    clearauth: (state) => {
      state.value = false
    }
  },
})

export const { addauth, clearauth} = authSlice.actions

export default authSlice.reducer