import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
  name: "userName",
  initialState: "Rodrigo",
  reducers: {
    getUsername: (state, action) => {
      const inputName = action.payload;
      return inputName;
    },
  },
});
export const {getUsername} = usernameSlice.actions;
export default usernameSlice.reducer;
