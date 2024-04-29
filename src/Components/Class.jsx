import React, { useState } from 'react'
import './Table.css'
import AddClass from './AddClass'

const Class = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='tableCon'>
      <table>
        <tr>
          <th>Class Name</th>
          <th>Year</th>
          <th>Teacher</th>
          <th>Student Fees</th>
          <th>Student list</th>
          <th></th>
        </tr>
        <tr>
          <td>10th</td>
          <td>2023</td>
          <td>xyz</td>
          <td>24000</td>
          <td>
            <select>
              <option value="">student1</option>
              <option value="">student2</option>
              <option value="">student3</option>
            </select>
          </td>
          <td><button>Delete</button><button>Edit</button></td>
        </tr>
        <tr>
          <td>12th</td>
          <td>2025</td>
          <td>xabc</td>
          <td>28000</td>
          <td>
            <select>
              <option value="">student1</option>
              <option value="">student2</option>
              <option value="">student3</option>
            </select>
          </td>
          <td><button>Delete</button><button>Edit</button></td>
        </tr>
        <tr>
          <td>11th</td>
          <td>2024</td>
          <td>xyzr</td>
          <td>24000</td>
          <td>
            <select>
              <option value="">student1</option>
              <option value="">student2</option>
              <option value="">student3</option>
            </select>
          </td>
          <td><button>Delete</button><button>Edit</button></td>
        </tr>
      </table>
      <button onClick={()=>{setIsOpen(true)}}>Add Class</button>
      <AddClass isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Class
