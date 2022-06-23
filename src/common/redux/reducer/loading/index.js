import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    apploadingstate: false
}

export const loadingStateSlice = createSlice({
    name: 'apploadingstate',
    initialState,
    reducers: {
      isloading: (state) => { 
          state.apploadingstate = true
       },
      notloading: (state) => { 
          state.apploadingstate = initialState.apploadingstate
      }
    },
  })
  
  export const { isloading, notloading } = loadingStateSlice.actions
  
  export const apploadingstate = (state) => state.apploadingstate
  
  export default loadingStateSlice.reducer