const { COOKIE_NAME } = require('../config/config');

const deleteCookie = (req, res) => {
  res.clearCookie(COOKIE_NAME).send({ message: 'Пользователь вышел из профиля' });
};

module.exports = deleteCookie;
