require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
const models = require('./models/models.js');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index.js');
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js');
const path = require('path');

const PORT = process.env.PORT || 8888;

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// обработка ошибок, последний middleware
app.use(errorHandler);

// req - запрос, res - ответ
app.get('/', (req, res) => {
  res.status(200).json({ message: 'WORKING!!!' });
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // синхронизация
    // await sequelize.drop();
    app.listen(PORT, () => console.log(`Server started: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

//  for dev in Linux:
		// "dev": "npm run kill && nodemon --delay 500ms index.js",
		// "kill": "kill -9 $(lsof -i : 6789) &>/dev/null | exit 0"

// for docker :
// 		"start" : "node index.js"

// for fix porblem with babel
// 		"start" : "node --exec babel-node index.js"
