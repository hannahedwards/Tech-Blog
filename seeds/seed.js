const sequelize = require('../config/connection');
const seedUser = require('./userData.js');
const seedBlog = require('./blogData.js');
const seedComment = require('./commentData.js');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedBlog();
  await seedComment();
  process.exit(0);
}
seedAll();