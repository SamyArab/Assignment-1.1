// // Description: This file is used to test the connection to the database and to insert sample data.
// import sequelize from "./database/database.js"
// import { Department } from "./models/index.js"
// ;(async () => {
//   try {
//     await sequelize.authenticate()
//     console.log("Connection has been established successfully.")

//     // Sync models with database
//     await sequelize.sync() // Warning: This will reset the database!
//     console.log("Database synchronized.")

//     // // Add sample data
//     // await Department.create({
//     //   name: "Music",
//     //   address: "Fake Street 1\nCity, State, ZIP",
//     // })
//     console.log("Sample data inserted.")
//   } catch (error) {
//     console.error("Unable to connect to the database:", error)
//   } finally {
//     await sequelize.close()
//   }
// })()

// Description: Test database connection and insert sample data.
import sequelize from "./database/database.js"
import { Department } from "./models/index.js"

;(async () => {
  try {
    await sequelize.authenticate()
    console.log("✅ Database connection established.")

    // Sync models without resetting data
    await sequelize.sync()
    console.log("✅ Database synchronized.")

    // Insert sample data only if none exists
    const departmentCount = await Department.count()
    if (departmentCount === 0) {
      await Department.create({
        name: "Music",
        address: "Fake Street 1\nCity, State, ZIP",
      })
      console.log("✅ Sample data inserted.")
    } else {
      console.log("⚠️ Sample data already exists. Skipping insertion.")
    }
  } catch (error) {
    console.error("❌ Database connection error:", error)
  } finally {
    await sequelize.close()
    console.log("✅ Database connection closed.")
  }
})()
