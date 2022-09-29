import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Await } from "react-router-dom";
import { STAFFS }  from './staffs';

const staffSlice = createSlice({
    name: 'staffList',
    initialState: {
        search: '',
        allStaff: [],
         

    },
    reducers: {
        staffSearch: (state, action)=>{
            state.search = action.payload
        },
        addStaff: (state, action)=>{
            console.log(action.payload);
           state.allStaff.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder 
        .addCase(getStaff.fulfilled, (state, action) => {
            console.log(action.payload);
            state.allStaff = action.payload
        })
        .addCase(addStaff.fulfilled, (state, action) => {
            state.allStaff = action.payload
        })
        .addCase(editStaff.fulfilled, (state, action) => {
            state.allStaff = action.payload
        })
        .addCase(deleteStaff.fulfilled, (state, action) => {
            state.allStaff = action.payload
        })
    }
})


export const getStaff = createAsyncThunk('staff/getStaff', async ()=>{
    const res = await fetch(' https://rjs101xbackend.herokuapp.com/')
    const data = await res.json()
    console.log(data);
    return data
})

export const addStaff = createAsyncThunk('staff/addStaff', async (newStaff)=>{
    const res = await fetch('https://rjs101xbackend.herokuapp.com/',{
        method: 'POST',
        body: JSON.stringify(newStaff),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    return data
})

export const editStaff = createAsyncThunk('staff/editStaff', async (staff)=> {
    const res = await fetch('https://rjs101xbackend.herokuapp.com/staffs', {
        method: 'PATCH',
        body: JSON.stringify(staff),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json()
    console.log(data);
    return data
})

export const deleteStaff = createAsyncThunk('staff/deleteStaff', async (staffId)=>{
    const res = await fetch(`https://rjs101xbackend.herokuapp.com/staffs/${staffId}`,{
        method: 'DELETE'
    }).then(data => data.json())
    return res
})

export default staffSlice;