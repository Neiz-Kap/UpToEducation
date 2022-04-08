const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next()
  }
  // try {
  const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
  console.log(`Создали токен`);

  if (!token) {
    console.log(`Ошибка из-за отсутствия токена в authMiddleware`);
    return res.status(401).json({ message: "Не авторизован" })
  }
  let secret_key = process.env.SECRET_KEY;
  console.log(`secret_key: ${secret_key}`);
  console.log(`token: ${token}`);
  const decoded = jwt.verify(token, secret_key)
  console.log(`Создали decoded`);
  req.user = decoded
  console.log(`Отправили пользователю decoded`);
  next()
  // }
  // catch (e) {
  //   res.status(401).json({ message: "Не авторизован (есть проблема в authMiddleware)" })
  //   console.log(`Ошибка из catch authMiddleware`);
  // }
};