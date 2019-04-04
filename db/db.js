const Sequelize = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost/acmeusersrank'
const db = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: 'false',
})

const User = db.define('user', {
  name: Sequelize.STRING,
  bio: Sequelize.TEXT,
  rank: Sequelize.INTEGER,
});

const syncAndSeed = () => {
  return db.sync({force: true})
    .then(() => {
      Promise.all([
        User.create({name: 'Moe', bio: 'Moe is fun', rank: 1}),
        User.create({name: 'Larry', bio: 'Larry is fun', rank: 2}),
        User.create({name: 'Curly', bio: 'Curly is fun', rank: 2}),
      ])
    })
    .catch(e => console.log(e));
}

module.exports = {
  db,
  User,
  syncAndSeed
}
