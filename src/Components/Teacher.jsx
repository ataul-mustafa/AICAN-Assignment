import React, { useState } from 'react'
import './Table.css'
import AddTeacherForm from './AddTeacherForm'

const Teacher = () => {
  const [isOpen, setIsOpen] = useState(false)
  return(
    <div className='tableCon'>
      <table>
        <tr>
          <th>Teacher Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Contact No.</th>
          <th>Salary</th>
          <th>Assigned Class</th>
          <th></th>
        </tr>
        <tr>
          <td>abc</td>
          <td>Male</td>
          <td>8/7/1999</td>
          <td>845241521</td>
          <td>24000</td>
          <td>
            10th
          </td>
          <td><button>Delete</button><button>Edit</button></td>
        </tr>
        <tr>
          <td>bcde</td>
          <td>Female</td>
          <td>8/7/1998</td>
          <td>845241521</td>
          <td>28000</td>
          <td>
            12th
          </td>
          <td><button>Delete</button><button>Edit</button></td>
        </tr>
        <tr>
          <td>xyz</td>
          <td>Male</td>
          <td>8/7/2000</td>
          <td>845241521</td>
          <td>22000</td>
          <td>
            11th
          </td>
          <td><button>Delete</button><button>Edit</button></td>
        </tr>
      </table>
      <button onClick={()=>{setIsOpen(true)}}>Add Teacher</button>
      <AddTeacherForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Teacher
