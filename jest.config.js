module.exports = {
  automock: false,
  setupFiles: ["dotenv/config", "./utils/setupJest.js"],
  testEnvironment: "node",
  testURL: "http://localhost:3000",
};
