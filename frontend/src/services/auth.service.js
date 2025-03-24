import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// Сервис для работы с аутентификацией
const AuthService = {
  // Регистрация пользователя
  register: async (username, password) => {
    return axios.post(`${API_URL}/auth/register`, {
      username,
      password
    });
  },
  
  // Вход пользователя
  login: async (username, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password
    });
    
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    
    return response.data;
  },
  
  // Выход пользователя
  logout: () => {
    localStorage.removeItem('user');
  },
  
  // Получить текущего пользователя
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
  
  // Получить профиль пользователя
  getProfile: async () => {
    const user = AuthService.getCurrentUser();
    return axios.get(`${API_URL}/protected/profile`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
  },
  
  // Получить защищенные данные
  getProtectedData: async () => {
    const user = AuthService.getCurrentUser();
    return axios.get(`${API_URL}/protected/data`, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
  }
};

export default AuthService;