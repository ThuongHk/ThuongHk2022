import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchAndStaff, searchSelector, staffSelector } from '../../redux/selector';
import AddStaff from './AddStaff';
import Search from './Search';
import { deleteStaff, getStaff } from './staffSlice';
// import { STAFFS } from './staffs';



const Staff = () => {
    const dispatch = useDispatch()  
    const staffPullSel = useSelector(searchAndStaff)
    console.log(staffPullSel);
    const handleDelete = (staff)=>{
        dispatch(deleteStaff(staff.id))
    }

    const staffRender = staffPullSel.map(staff => {
        return (
            <div className="col-md-2 col-sm-4 col-xs-12 position_out" key={staff.id}>
                <button className="btn btn-primary btn-sm" onClick={()=>handleDelete(staff)}>&times;</button>
                <Link to={`/staff/${staff.id}`} style={{textDecoration: 'none'}}>
                    <div className="card">
                        <img className="card-img-top" src={staff.image} alt={staff.name} />
                        <div className="card-body">
                            <h6 className="card-title">{staff.name}</h6>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div className="container-fluid">
            <h4 className="text-info">DANH SÁCH CÁC NHÂN VIÊN TRONG CÔNG TY</h4>
           <div className="row mt-3 ml-2">
           <Search/>          
           </div>
           <div className='row ml-2 mb-4'>
           <AddStaff/>
           </div>
            <div className="row">{staffRender}</div>
        </div>
    );
};

export default Staff;