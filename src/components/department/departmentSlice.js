import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const departmentSlice = createSlice({
    name: 'departmentList',
    initialState: {
        status: 'idle',
        department: []
    },
    reducers: {
      filterDept: (state, action)=>{
        state.department = action.payload
      }
    },
    extraReducers: builder => {
        builder 
        .addCase(getDepartment.fulfilled, (state, action)=>{
            state.status = 'success'
            state.department = action.payload
        })
    }

})


export const getDepartment = createAsyncThunk('staff/department', async ()=> {
    const res = await fetch('https://rjs101xbackend.herokuapp.com/departments')
    const data = res.json()
    return data
})


export default departmentSlice;