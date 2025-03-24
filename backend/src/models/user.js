// Модель пользователя и хранилище в памяти
class User {
    constructor(id, username, password) {
      this.id = id;
      this.username = username;
      this.password = password;
    }
  }
  
  // Хранилище пользователей в памяти (массив объектов)
  const users = [];
  let nextId = 1;
  
  // Функции для работы с хранилищем пользователей
  const userRepository = {
    findAll: () => users,
    
    findById: (id) => users.find(user => user.id === id),
    
    findByUsername: (username) => users.find(user => user.username === username),
    
    create: (username, password) => {
      const user = new User(nextId++, username, password);
      users.push(user);
      return user;
    }
  };
  
  module.exports = { User, userRepository };