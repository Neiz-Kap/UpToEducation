const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');

// без внешних ключей
const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  theme: { type: DataTypes.STRING, defaultValue: "dark" },
});

// без внешних ключей
const Course = sequelize.define('course', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  author: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  course_url: { type: DataTypes.STRING, allowNull: false },
  fone: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING }
  // publicators
  // date_dev: { type: DataTypes.DATA }
  // rating
  // real_price
});

const ChoiseCourse = sequelize.define('choise_course', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

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

const Occupation = sequelize.define('occupation', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const CourseAuthor = sequelize.define('course_author', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const OccupationAuthor = sequelize.define('occupation_author', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

// Publicator

User.belongsToMany(Course, { through: ChoiseCourse })
Course.belongsToMany(User, { through: ChoiseCourse })

// Courses.hasMany(TagsCourse);
// TagsCourse.belongsTo(Courses);

// TagsCourse.hasOne(Tags);
// Tags.belongsTo(TagsCourse);

Occupation.hasMany(Course)
Course.belongsTo(Occupation)

CourseAuthor.hasMany(Course)
Course.belongsTo(CourseAuthor)

Occupation.belongsToMany(CourseAuthor, { through: OccupationAuthor })
CourseAuthor.belongsToMany(Occupation, { through: OccupationAuthor })

module.exports = {
  User,
  Course,
  ChoiseCourse,
  Occupation,
  CourseAuthor,
  OccupationAuthor,
  // TagsCourse,
  // Tags
}
