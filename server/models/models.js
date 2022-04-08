const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');

// без внешних ключей
const Users = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  theme: { type: DataTypes.STRING, defaultValue: "dark" },
});

// используя внешние ключи
const Choise = sequelize.define('choises', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // useId
});

// используя внешние ключи
const ChoiseCourses = sequelize.define('choise_courses', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // course_id
  // choise_id
});

// без внешних ключей
const Courses = sequelize.define('courses', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  author: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  course_url: { type: DataTypes.STRING, allowNull: false },
  fone: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING }
  // date_dev: { type: DataTypes.DATA }
  // rating
  // real_price
});


// Table authors

// // используя внешние ключи
// const TagsCourse = sequelize.define('tags_courses', {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   // course_id
//   // tag_id
// });

// // без внешних ключей
// const Tags = sequelize.define('tags', {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, unique: true, allowNull: false },
//   color: { type: DataTypes.STRING, allowNull: false },
//   background_color: { type: DataTypes.STRING, allowNull: false },
// });


Users.hasOne(Choise);
Choise.belongsTo(Users);

// Choise.hasMany(ChoiseCourses);
// ChoiseCourses.belongsTo(Choise);
//
// Courses.hasOne(ChoiseCourses);
// ChoiseCourses.belongsTo(Courses);

ChoiseCourses.hasMany(Choise);
Choise.belongsTo(ChoiseCourses);

ChoiseCourses.hasMany(Courses);
Courses.belongsTo(ChoiseCourses);


// Courses.hasMany(TagsCourse);
// TagsCourse.belongsTo(Courses);

// TagsCourse.hasOne(Tags);
// Tags.belongsTo(TagsCourse);

module.exports = {
  Users,
  Choise,
  ChoiseCourses,
  Courses,
  // TagsCourse,
  // Tags
}
