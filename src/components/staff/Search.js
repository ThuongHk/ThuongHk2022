import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  staffSlice from './staffSlice';

const Search = () => {
   const [inputSearch, setInputSearch] = useState();
   const dispatch = useDispatch()
   const handleSearch = (e)=>{
    setInputSearch(e.target.value)
    dispatch(staffSlice.actions.staffSearch(e.target.value))
   }
    return (
        <div>
            <b>Tìm kiếm nhân viên: </b> <br/>
            <input type="text" value={inputSearch} onChange={handleSearch} />        
        </div>
    );
};

export default Search;