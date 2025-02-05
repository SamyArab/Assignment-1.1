// import express from "express"
// import apiRoutes from "./routes/api.js"
// import { sequelize } from "./models/index.js"
// import cors from "cors"

// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use("/api", apiRoutes)

// app.use((req, res, next) => {
//   console.log("Incoming Request:", req.method, req.url)
//   next()
// })

// // Start the server and sync database
// ;(async () => {
//   try {
//     await sequelize.authenticate()
//     console.log("Database connected.")

//     await sequelize.sync() // Set force to true to reset tables
//     console.log("Database synchronized.")

//     app.listen(3100, () => {
//       console.log("Server is running on http://localhost:3100")
//     })
//   } catch (error) {
//     console.error("Unable to connect to the database:", error)
//   }
// })()

import express from "express"
import apiRoutes from "./routes/api.js"
import { sequelize } from "./models/index.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", apiRoutes)

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`📡 ${req.method} request to ${req.url}`)
  next()
})

// Start the server and connect to the database
;(async () => {
  try {
    await sequelize.authenticate()
    console.log("✅ Database connected successfully.")

    await sequelize.sync() // Ensure models are synced without force reset
    console.log("✅ Database synchronized.")

    const PORT = 3100
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error("❌ Error starting server:", error)
  }
})()
