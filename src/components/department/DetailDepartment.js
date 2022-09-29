import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { departmentSelector, staffSelector } from '../../redux/selector';
import { deleteStaff } from '../staff/staffSlice';


const DetailDepartment = () => {
    const dispatch = useDispatch()
        const params = useParams();
        const depPullSel = useSelector(departmentSelector);
        const staffPullSel = useSelector(staffSelector);
        const dataDept = depPullSel.find(dep => dep.id.toString() === params.departmentId);
        const dataDeptDetail = staffPullSel.filter(dept => dept.departmentId === params.departmentId)
        const handleDelete = (staff) =>{
             dispatch(deleteStaff(staff.id))
        }

        console.log(dataDept);
        const showDepartment = dataDeptDetail.map(staff => {
            return(
                <div className="col-md-2 col-sm-4 col-xs-12" key={staff.id}>
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
        <div>
            <h4> Phòng ban: {dataDept?.name}</h4>
            <div className="row mt-5 mb-2">{showDepartment}</div>
        </div>
    );
};

export default DetailDepartment;