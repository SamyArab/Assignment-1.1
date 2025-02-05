// import React, { useState } from 'react';
// import axios from 'axios';

// const QueryButtons = () => {
//     const [data, setData] = useState([]);
//     const [columns, setColumns] = useState([]);
//     const [title, setTitle] = useState('Query Results');

//     const fetchData = async (endpoint, title) => {
//       try {
//         console.log(`Fetching data from: ${endpoint}`);
//         const response = await axios.get(`http://localhost:3100/api/${endpoint}`);
//         if (response.data.length > 0) {
//           // Dynamically get columns from the first result
//           setColumns(Object.keys(response.data[0]));
//         }
//         setData(response.data);
//         setTitle(title); // Set table title dynamically
//       } catch (error) {
//         console.error(`Error fetching ${endpoint}:`, error);
//         setData([]);
//         setColumns([]);
//         setTitle(`Error loading ${title}`);
//       }
//     };

//   return (
//     <div style={{ marginLeft: '20px' }}>
//       <h1>List All the Records </h1>
//       <button onClick={() => fetchData('departments', 'Departments')}>
//         List All Departments
//       </button>
//       <button onClick={() => fetchData('courses', 'Courses')}>
//         List All Courses
//       </button>
//       <button onClick={() => fetchData('students', 'Students')}>
//         List All Students
//       </button>

//       <h2>{title}</h2>
//       {data.length > 0 ? (
//         <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
//           <thead>
//             <tr>
//               {columns.map((col, index) => (
//                 <th key={index}>{col}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {columns.map((col, colIndex) => (
//                   <td key={colIndex}>{row[col]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );

// };

// export default QueryButtons;

// /*
// return (
//     <div>
//       <button onClick={() => fetchData('departments')}>List All Departments</button>
//       <button onClick={() => fetchData('courses')}>List All Courses</button>
//       <button onClick={() => fetchData('students')}>List All Students</button>
//       <div>
//         <h3>Results:</h3>
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       </div>
//     </div>
//   );*/

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// import React, { useState } from "react"
// import axios from "axios"

// const QueryButtons = () => {
//   const [data, setData] = useState([])
//   const [columns, setColumns] = useState([])
//   const [title, setTitle] = useState("Query Results")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [isStudentList, setIsStudentList] = useState(false)
//   const itemsPerPage = 10

//   const fetchData = async (endpoint, title) => {
//     try {
//       console.log(`Fetching data from: ${endpoint}`)
//       const response = await axios.get(`http://localhost:3100/api/${endpoint}`)
//       if (response.data.length > 0) {
//         setColumns(Object.keys(response.data[0]))
//       }
//       setData(response.data)
//       setTitle(title)
//       setCurrentPage(1) // Reset to first page on new fetch
//       setIsStudentList(endpoint === "students") // Only enable pagination for students
//     } catch (error) {
//       console.error(`Error fetching ${endpoint}:`, error)
//       setData([])
//       setColumns([])
//       setTitle(`Error loading ${title}`)
//       setIsStudentList(false)
//     }
//   }

//   // Get current page data
//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage
//   const currentData = isStudentList
//     ? data.slice(indexOfFirstItem, indexOfLastItem)
//     : data

//   const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   return (
//     <div style={{ marginLeft: "20px" }}>
//       <h1>List All the Records </h1>
//       <button onClick={() => fetchData("departments", "Departments")}>
//         List All Departments
//       </button>
//       <button onClick={() => fetchData("courses", "Courses")}>
//         List All Courses
//       </button>
//       <button onClick={() => fetchData("students", "Students")}>
//         List All Students
//       </button>

//       <h2>{title}</h2>
//       {currentData.length > 0 ? (
//         <div>
//           <table
//             border="1"
//             style={{ width: "100%", marginTop: "20px", textAlign: "left" }}
//           >
//             <thead>
//               <tr>
//                 {columns.map((col, index) => (
//                   <th key={index}>{col}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {currentData.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {columns.map((col, colIndex) => (
//                     <td key={colIndex}>{row[col]}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {/* Pagination only for students */}
//           {isStudentList && (
//             <div style={{ marginTop: "10px" }}>
//               {Array.from(
//                 { length: Math.ceil(data.length / itemsPerPage) },
//                 (_, i) => (
//                   <button
//                     key={i + 1}
//                     onClick={() => paginate(i + 1)}
//                     style={{ margin: "5px", padding: "5px", cursor: "pointer" }}
//                   >
//                     {i + 1}
//                   </button>
//                 )
//               )}
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   )
// }

// export default QueryButtons

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
import React, { useState } from "react"
import axios from "axios"

const QueryButtons = () => {
  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])
  const [title, setTitle] = useState("Query Results")
  const [currentPage, setCurrentPage] = useState(1)
  const [isStudentList, setIsStudentList] = useState(false)
  const [studentCourses, setStudentCourses] = useState(null)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const itemsPerPage = 10

  const fetchData = async (endpoint, title) => {
    try {
      console.log(`Fetching data from: ${endpoint}`)
      const response = await axios.get(`http://localhost:3100/api/${endpoint}`)
      if (response.data.length > 0) {
        setColumns(Object.keys(response.data[0]))
      }
      setData(response.data)
      setTitle(title)
      setCurrentPage(1) // Reset to first page on new fetch
      setIsStudentList(endpoint === "students") // Enable pagination only for students
      setStudentCourses(null) // Reset courses when switching tables
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error)
      setData([])
      setColumns([])
      setTitle(`Error loading ${title}`)
      setIsStudentList(false)
    }
  }

  const fetchStudentCourses = async (studentId) => {
    try {
      console.log(`Fetching courses for student ID: ${studentId}`)
      const response = await axios.get(
        `http://localhost:3100/api/students/${studentId}/courses`
      )
      console.log("API Response:", response.data)

      if (Array.isArray(response.data) && response.data.length > 0) {
        setStudentCourses(response.data)
      } else {
        setStudentCourses([])
        console.log("No courses found for this student.")
      }
      setSelectedStudent(studentId)
    } catch (error) {
      console.error("Error fetching student courses:", error)
      setStudentCourses([])
    }
  }

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentData = isStudentList
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : data

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>List All Records</h1>
      <button onClick={() => fetchData("departments", "Departments")}>
        List All Departments
      </button>
      <button onClick={() => fetchData("courses", "Courses")}>
        List All Courses
      </button>
      <button onClick={() => fetchData("students", "Students")}>
        List All Students
      </button>

      <h2>{title}</h2>
      {currentData.length > 0 ? (
        <div>
          <table
            border="1"
            style={{ width: "100%", marginTop: "20px", textAlign: "left" }}
          >
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
                {title === "Students" && <th>Courses</th>}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex}>{row[col]}</td>
                  ))}
                  {title === "Students" && (
                    <td>
                      <button
                        onClick={() => fetchStudentCourses(row.id)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "white",
                        }}
                      >
                        Classes
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination only for students */}
          {isStudentList && (
            <div style={{ marginTop: "10px" }}>
              {Array.from(
                { length: Math.ceil(data.length / itemsPerPage) },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    style={{ margin: "5px", padding: "5px", cursor: "pointer" }}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      ) : (
        <p>No data available</p>
      )}

      {/* Display Student Courses */}
      {studentCourses && (
        <div style={{ marginTop: "20px" }}>
          <h3>Courses for Student ID: {selectedStudent}</h3>
          <table
            border="1"
            style={{ width: "100%", marginTop: "10px", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
              </tr>
            </thead>
            <tbody>
              {studentCourses.map((course, index) => (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default QueryButtons
