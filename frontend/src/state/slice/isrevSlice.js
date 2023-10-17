import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const isrevSlice = createSlice({
  name: 'isrevSlice',
  initialState,
  reducers: {
    sendrev: (state, text) => {
      state.value = text
    },

    delrev: (state, text) => {
      state.value = text
    }
  },
})

export const { sendrev, delrev } = isrevSlice.actions

export default isrevSlice.reducer