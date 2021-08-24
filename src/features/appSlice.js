import {  createSlice } from '@reduxjs/toolkit';


export const appSlice = createSlice({
  name: "app",
  initialState: {
      roomId: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state,action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const selectRoomId = (state) => state.counter.roomId;

export const { enterRoom } = appSlice.actions;
 

export default appSlice.reducer;
