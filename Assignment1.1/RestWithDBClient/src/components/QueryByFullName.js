import React, { useState } from "react"
import axios from "axios"

const QueryByFullName = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [results, setResults] = useState([])

  const queryStudents = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3100/api/students_query_first_last`,
        {
          params: { firstName, lastName },
        }
      )
      setResults(response.data)
    } catch (error) {
      console.error("Error querying students by full name:", error)
    }
  }

  return (
    <div>
      <h2>Query By Full Name</h2>
      <input
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={queryStudents}>Query by Full Name</button>

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

export default QueryByFullName
