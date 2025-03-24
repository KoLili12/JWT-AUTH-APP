const express = require('express');
const verifyToken = require('../middleware/auth');
const { userRepository } = require('../models/user');

const router = express.Router();

// Защищенный маршрут - требует токен для доступа
router.get('/profile', verifyToken, (req, res) => {
  const user = userRepository.findById(req.userId);
  
  if (!user) {
    return res.status(404).json({ message: 'Пользователь не найден' });
  }
  
  // Не отправляем пароль в ответе
  const { password, ...userWithoutPassword } = user;
  
  res.json({
    message: 'Профиль успешно получен',
    user: userWithoutPassword
  });
});

// Еще один защищенный маршрут с данными
router.get('/data', verifyToken, (req, res) => {
  res.json({
    message: 'Вы получили доступ к защищенным данным',
    data: [
      { id: 1, name: 'Защищенные данные 1' },
      { id: 2, name: 'Защищенные данные 2' },
      { id: 3, name: 'Защищенные данные 3' }
    ]
  });
});

module.exports = router;