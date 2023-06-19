"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    Example: await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Yudistira",
          profession: "Admin Micro",
          role: "admin",
          email: "yudistira@gmail.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Rivaldi",
          profession: "Backend",
          role: "student",
          email: "rivaldi@gmail.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
