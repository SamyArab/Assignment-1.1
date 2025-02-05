import Sequelize from "sequelize"
import path from "path"

// Ensure the database file is inside the database folder
const databasePath = path.resolve("database", "studentsinfo.sqlite")

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: databasePath, // ✅ Correct path
  logging: false, // Set to true if debugging
})

export default sequelize
