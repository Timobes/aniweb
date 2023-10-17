import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const bookdelSlice = createSlice({
  name: 'bookdelSlice',
  initialState,
  reducers: {
    delbook: (state) => {
      state.value = true
    }
  },
})

export const { delbook} = bookdelSlice.actions

export default bookdelSlice.reducer