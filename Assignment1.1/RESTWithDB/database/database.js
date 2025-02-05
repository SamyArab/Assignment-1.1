// import Sequelize from 'sequelize';

// // Create a connection to SQLite3 database
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'studentsinfo.sqlite', // Path to SQLite file
//   logging: false, // Disable logging; change to true for debugging
// });

// export default sequelize;

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
