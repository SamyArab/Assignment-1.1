// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const QueryByName = () => {
// //   const [firstName, setFirstName] = useState('');
// //   const [results, setResults] = useState([]);

// //   const queryStudents = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:3100/api/students_query_firstName`, {
// //         params: { firstName },
// //       });
// //       setResults(response.data);
// //     } catch (error) {
// //       console.error('Error querying students by first name:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //         <h2>Query By First Name</h2>
// //       <input
// //         type="text"
// //         placeholder="Enter first name"
// //         value={firstName}
// //         onChange={(e) => setFirstName(e.target.value)}
// //       />
// //       <button onClick={queryStudents}>Query by First Name</button>
// //       <div>
// //         <h3>Results:</h3>
// //         <pre>{JSON.stringify(results, null, 2)}</pre>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QueryByName;

// import React, { useState } from "react"
// import axios from "axios"

// const QueryByName = () => {
//   const [firstName, setFirstName] = useState("")
//   const [results, setResults] = useState([])
//   const [columns, setColumns] = useState([])
//   const [page, setPage] = useState(1)
//   const [totalPages, setTotalPages] = useState(1)

//   const queryStudents = async (pageNumber = 1) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3100/api/students_query_firstName`,
//         {
//           params: { firstName, page: pageNumber },
//         }
//       )

//       // Extract students and remove createdAt/updatedAt
//       const students = response.data.students.map(
//         ({ createdAt, updatedAt, ...rest }) => rest
//       )

//       setResults(students)
//       setColumns(
//         Object.keys(students[0] || {}).filter(
//           (col) => col !== "createdAt" && col !== "updatedAt"
//         )
//       )
//       setPage(response.data.currentPage)
//       setTotalPages(response.data.totalPages)
//     } catch (error) {
//       console.error("Error querying students by first name:", error)
//     }
//   }

//   return (
//     <div>
//       <h2>Query By First Name</h2>
//       <input
//         type="text"
//         placeholder="Enter first name"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//       />
//       <button onClick={() => queryStudents(1)}>Query</button>

//       {results.length > 0 ? (
//         <div>
//           <h3>Results:</h3>
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
//               {results.map((row, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {columns.map((col, colIndex) => (
//                     <td key={colIndex}>{row[col]}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div>
//             <button
//               disabled={page <= 1}
//               onClick={() => queryStudents(page - 1)}
//             >
//               Previous
//             </button>
//             <span>
//               {" "}
//               Page {page} of {totalPages}{" "}
//             </span>
//             <button
//               disabled={page >= totalPages}
//               onClick={() => queryStudents(page + 1)}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   )
// }

// export default QueryByName

import React, { useState } from "react"
import axios from "axios"

const QueryByName = () => {
  const [firstName, setFirstName] = useState("")
  const [results, setResults] = useState([])

  const queryStudents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3100/api/students_query_firstName`,
        {
          params: { firstName },
        }
      )
      setResults(response.data)
    } catch (error) {
      console.error("Error querying students by first name:", error)
    }
  }

  return (
    <div>
      <h2>Query By First Name</h2>
      <input
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button onClick={queryStudents}>Query by First Name</button>

      {results.length > 0 ? (
        <div>
          <h3>Results:</h3>
          <table
            border="1"
            style={{ width: "100%", marginTop: "20px", textAlign: "left" }}
          >
            <thead>
              <tr>
                {Object.keys(results[0]).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((student, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(student).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  )
}

export default QueryByName
