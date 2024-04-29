import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popus.css'

const AddStudent = ({isOpen, setIsOpen}) => {
    const [formData, setFormData] = useState({
        studentName: '',
        gender: '',
        dob: '',
        contactNo: '',
        feePaid: '',
        class: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform further actions here, such as sending data to the server
        console.log(formData);
        // Reset form fields
        setFormData({
            studentName: '',
            gender: '',
            dob: '',
            contactNo: '',
            feePaid: '',
            class: '',
        });
    };

    const popupContentStyle = {
        borderRadius: "10px",
        width: window.innerWidth <= 768 && '100vw',
    };

    return (
        <Popup open={isOpen}
            closeOnDocumentClick={true}
            onClose={() => { setIsOpen(false) }}
            contentStyle={popupContentStyle}
        >
            <div className="form-container">
                <h2>Add a Student</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="teacherName">Teacher Name:</label>
                        <input
                            type="text"
                            id="teacherName"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNo">Contact No.:</label>
                        <input
                            type="text"
                            id="contactNo"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary:</label>
                        <input
                            type="text"
                            id="salary"
                            name="feePaid"
                            value={formData.feePaid}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="classAssigned">Class:</label>
                        <input
                            type="text"
                            id="classAssigned"
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Add Sudent</button>
                    <button type="cancel" onClick={()=>{setIsOpen(false)}}>Cancel</button>
                </form>
            </div>
        </Popup>
    );
};

export default AddStudent;
