import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import staffSlice, { addStaff, editStaff, getStaff } from './staffSlice';
import './Staff.css';


const EditStaff = ({ edit }) => {
    const dispatch = useDispatch()
    const submitForm = (data) => {
        dispatch(editStaff({
            id: edit.id,
            name: data.name,
            doB: data.doB,
            salaryScale: data.salaryScale,
            startDate: data.startDate,
            departmentId: data.departmentId,
            annualLeave: data.annualLeave,
            overTime: data.overTime,
            image: "/assets/images/alberto.png"
        })).then(() => setModal(false))

    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    // ----modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // ----modal
    return (
        <div className='container-fluid editStaff'>
            <Button color="danger" className="btn-btn-danger btn-sm" onClick={toggle}>
                Chỉnh Sửa Thông Tin Nhân Viên
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Thông Tin Nhân Viên</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="form-group">
                            <label>Họ tên:</label>
                            <input type="text" className="form-control" defaultValue={edit?.name} {...register('name')} />
                        </div>
                        <div className="form-group">
                            <label>Ngày sinh:</label>
                            <input type="date" className="form-control" defaultValue={edit?.doB} {...register('doB')} />
                        </div>
                        <div className="form-group">
                            <label>Hệ số lương:</label>
                            <input type="number" min='1' max='5' className="form-control" defaultValue={edit?.salaryScale} {...register('salaryScale')} />
                        </div>
                        <div className="form-group">
                            <label>Ngày vào công ty:</label>
                            <input type="date" className="form-control" defaultValue={edit?.startDate} {...register('startDate')} />
                        </div>
                        <div className="form-group">
                            <label>Phòng ban:</label>
                            <select className="form-control" {...register('departmentId')} >
                                <option value='Dept01'>Sale</option>
                                <option value='Dept02'>Hr</option>
                                <option value='Dept03'>Marketing</option>
                                <option value='Dept04'>It</option>
                                <option value='Dept05'>Fiance</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Số ngày nghỉ còn lại:</label>
                            <input type="number" min='1' max='5' className="form-control" defaultValue={edit?.annualLeave} {...register('annualLeave')} />
                        </div>
                        <div className="form-group">
                            <label>Số ngày làm thêm: </label>
                            <input type="number" min='1' max='5' className="form-control" defaultValue={edit?.overTime} {...register('overTime')} />
                        </div>
                        <button type="submit" className="btn btn-info btn-sm">Submit</button>
                    </form>
                </ModalBody>
                <ModalFooter>
                    {/* <Button color="primary" onClick={toggle}>
                        Hoàn thành
                    </Button>{' '} */}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default EditStaff;