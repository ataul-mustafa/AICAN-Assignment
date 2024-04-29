import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import './popus.css'

const AddClass = ({ isOpen, setIsOpen }) => {

    const [formData, setFormData] = useState({
        className: '',
        year: '',
        teacher: '',
        studentFee: '',
        students: [],
        newStudent: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleAddStudent = () => {
        if (formData.newStudent.trim() !== '') {
          setFormData({
            ...formData,
            students: [...formData.students, formData.newStudent.trim()],
            newStudent: '',
          });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform further actions here, such as sending data to the server
        console.log(formData);
        // Reset form fields
        setFormData({
          className: '',
          year: '',
          teacher: '',
          studentFee: '',
          students: [],
          newStudent: '',
        });
      };

    const popupContentStyle = {
        borderRadius: "10px",
        width: window.innerWidth <= 768 && '100vw',
    };

    return (
        <div>
            <Popup open={isOpen}
                closeOnDocumentClick={true}
                onClose={() => { setIsOpen(false) }}
                contentStyle={popupContentStyle}
            >
                <div className="form-container">
                    <h2>Add a Class</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="className">Class Name:</label>
                            <input
                                type="text"
                                id="className"
                                name="className"
                                value={formData.className}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input
                                type="text"
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="teacher">Teacher:</label>
                            <input
                                type="text"
                                id="teacher"
                                name="teacher"
                                value={formData.teacher}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="studentFee">Student Fee:</label>
                            <input
                                type="text"
                                id="studentFee"
                                name="studentFee"
                                value={formData.studentFee}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="students">Students:</label>
                            <input
                                type="text"
                                id="students"
                                name="newStudent"
                                value={formData.newStudent}
                                onChange={handleChange}
                            />
                            <button type="button" onClick={handleAddStudent}>Add Student</button>
                            <ul>
                                {formData.students.map((student, index) => (
                                    <li key={index}>{student}</li>
                                ))}
                            </ul>
                        </div>
                        <button type="submit">Add Class</button>
                        <button onClick={()=>{setIsOpen(false)}} type="cancel">Cancel</button>
                    </form>
                </div>
            </Popup>
        </div>
    )
}

export default AddClass
