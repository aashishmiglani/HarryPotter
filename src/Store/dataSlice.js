import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const STATEUES = {
    IDLE: "idle",
    EROOR: "error",
    LOADING: "loading"

}


const fetchDataSlice = createSlice({
    name: "allData",
    initialState: {
        data: [],
        status: STATEUES.IDLE
    },
    reducers: {
        setHarryPotterData(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }


    }
})




export const { setHarryPotterData, setStatus } = fetchDataSlice.actions
export default fetchDataSlice.reducer



export function fetchThunkData(payload) {
    return async function fetchAllData(dispatch, getState) {
        dispatch(setStatus(STATEUES.LOADING))
        try {
            let response = await axios.get("https://legacy--api.herokuapp.com/api/v1/characters")
            let data = await response.data
            dispatch(setHarryPotterData(data))
            dispatch(setStatus(STATEUES.IDLE))

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATEUES.EROOR))

        }
    }

}





