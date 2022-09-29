
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import staffSlice, { addStaff, getStaff } from './staffSlice';
import './Staff.css';

const schema = yup.object().shape({
    name: yup
    .string()
    .required('Vui lòng nhập họ tên của bạn'),
    doB: yup
    .string()
    .required('Vui lòng nhập ngày sinh của bạn'),
    salaryScale: yup
    .number()
    .required('Vui lòng nhập hệ số lương của bạn')
    .min(1,'Hệ số lương phải lớn hơn 1 và bé hơn 5')
    .max(5,'Hệ số lương phải lớn hơn 1 và bé hơn 5'),
    startDate: yup
    .string()
    .required(' Vui lòng nhập ngày vào công ty'),
    annualLeave: yup
    .number()
    .required('Vui lòng nhập số ngày nghỉ còn lại')
    .min(1,'Số ngày nghỉ còn lại phải lớn hơn 1 và bé hơn 5')
    .max(5,'Số ngày nghỉ còn lại phải lớn hơn 1 và bé hơn 5'),
    overTime: yup
    .number()
    .required('Vui lòng nhập số ngày làm thêm')
    .min(1,'Số ngày làm thêm phải lớn hơn 1 và bé hơn 5')
    .max(5, 'Số ngày làm thêm phải lớn hơn 1 và bé hơn 5')

    
    
})

const AddStaff = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
    const submitForm = (data) => {
       dispatch(addStaff({
        id: nanoid(),
        name: data.name,
        doB: data.doB,
        salaryScale: data.salaryScale,
        startDate: data.startDate,
        departmentId: data.departmentId,
        annualLeave: data.annualLeave,
        overTime: data.overTime,
        image: "/assets/images/alberto.png"
       })).then(()=>dispatch(getStaff))
       setModal(false)
    }
    // ----modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    // ----modal

    return (
        <div>
            <Button color="danger" className="btn-btn-danger btn-sm" onClick={toggle}>
                +
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Thông Tin Nhân Viên Mới</ModalHeader>
                <ModalBody>
                  <form onSubmit={handleSubmit(submitForm)}>
                    <div className="form-group">
                      <label>Họ tên:</label>
                      <input type="text" className="form-control" {...register('name')} />  
                      {errors.name && <p className="err">{errors.name?.message}</p>}                   
                    </div>
                    <div className="form-group">
                      <label>Ngày sinh:</label>
                      <input type="date" className="form-control" {...register('doB')} /> 
                      {errors?.doB && <p className="err">{errors.doB?.message}</p>}                    
                    </div>
                    <div className="form-group">
                      <label>Hệ số lương:</label>
                      <input type="number" min='1' max='5' className="form-control" {...register('salaryScale')} />
                      {errors?.salaryScale && <p className="err">{errors.salaryScale?.message}</p>}                     
                    </div>
                    <div className="form-group">
                      <label>Ngày vào công ty:</label>
                      <input type="date" className="form-control" {...register('startDate')} /> 
                      {errors?.startDate && <p className="err">{errors.startDate?.message}</p>}                    
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
                      <input type="number" min='1'  max='5' className="form-control" {...register('annualLeave')} />
                      {errors?.annualLeave && <p className="err">{errors.annualLeave?.message}</p>}                     
                    </div>
                    <div className="form-group">
                      <label>Số ngày làm thêm: </label>
                      <input type="number" min='1' max='5' className="form-control" {...register('overTime')} /> 
                      {errors?.overTime && <p className="err">{errors.overTime?.message}</p>}                    
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

export default AddStaff;