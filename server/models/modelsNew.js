const sequelize = require('../db.js');
const { DataTypes } = require('sequelize');

// без внешних ключей
const Users = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  theme: { type: DataTypes.STRING, defaultValue: "dark" },
});

const Courses = sequelize.define('courses', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  author: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  course_url: { type: DataTypes.STRING, allowNull: false },
  image_url: { type: DataTypes.STRING },
  // date_dev: { type: DataTypes.DATA }
});

const Tags = sequelize.define('tags', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  color: { type: DataTypes.STRING, allowNull: false },
  background_color: { type: DataTypes.STRING, allowNull: false },
});


// используя внешние ключи
const Choise = sequelize.define('choise', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // user_id
});

const ChoiseCourses = sequelize.define('choise_courses', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // course_id
  // choise_id
});

const Tag = sequelize.define('tag',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // tag_id
  });

const TagsCourse = sequelize.define('tags_course', {
  tc_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  // id
  // course_id
});

Users.hasOne(Choise);
Choise.belongsTo(Users);

Choise.hasMany(ChoiseCourses);
ChoiseCourses.belongsTo(Choise);

ChoiseCourses.hasMany(Courses);
Courses.belongsTo(ChoiseCourses);

Tags.hasOne(Tag);
Tag.belongsTo(Tags);

Tag.hasMany(TagsCourse);
TagsCourse.belongsTo(Tag);

TagsCourse.hasMany(Courses);
Courses.belongsTo(TagsCourse);

module.exports = {
  Users,
  Choise,
  ChoiseCourses,
  Courses,
  TagsCourse,
  Tag,
  Tags
}
