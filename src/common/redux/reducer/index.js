import { combineReducers } from "redux";
import { loadingStateSlice } from "./loading";




export default combineReducers({
    loadingState: loadingStateSlice.reducer
})