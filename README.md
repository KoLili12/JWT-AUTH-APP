# JWT Authentication App

Простое веб-приложение с аутентификацией на основе JWT токенов. Проект разработан как демонстрация реализации JWT-аутентификации с использованием Node.js (Express) на бэкенде и React на фронтенде.

## Описание

Данное приложение представляет собой реализацию системы аутентификации с использованием JWT (JSON Web Tokens). Оно включает:

- Регистрацию пользователей
- Вход в систему с JWT-аутентификацией
- Защищенные маршруты, доступные только авторизованным пользователям
- Хранение пользователей в памяти (массив объектов)

## Структура проекта

```
jwt-auth-app/
├── backend/              # Серверная часть (Node.js, Express)
│   ├── src/
│   │   ├── middleware/   # Middleware для проверки JWT
│   │   │   └── auth.js
│   │   ├── models/       # Модели данных
│   │   │   └── user.js
│   │   ├── routes/       # API маршруты
│   │   │   ├── auth.js
│   │   │   └── protected.js
│   │   ├── app.js        # Настройка Express
│   │   └── server.js     # Входная точка сервера
│   ├── package.json
│   └── .env              # Переменные окружения
│
├── frontend/             # Клиентская часть (React)
│   ├── public/
│   ├── src/
│   │   ├── components/   # React компоненты
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

## Установка и настройка

### 1. Клонирование репозитория

```bash
git clone https://github.com/your-username/jwt-auth-app.git
cd jwt-auth-app
```

### 2. Настройка бэкенда

```bash
# Переход в директорию бэкенда
cd backend

# Установка зависимостей
npm install
```

### 3. Настройка фронтенда

```bash
# Переход в директорию фронтенда
cd ../frontend

# Установка зависимостей
npm install
```

## Запуск приложения

### 1. Запуск бэкенда

```bash
cd backend
npm run dev
```

Сервер запустится на порту 5001. Вы должны увидеть сообщение: "Сервер запущен на порту 5001"

### 2. Запуск фронтенда

```bash
cd frontend
npm start
```

Фронтенд запустится на порту 3000. Приложение автоматически откроется в вашем браузере по адресу: http://localhost:3000

## API Endpoints

### Публичные маршруты

- `POST /api/auth/register` - Регистрация нового пользователя
  ```json
  {
    "username": "user",
    "password": "password"
  }
  ```

- `POST /api/auth/login` - Вход в систему и получение JWT токена
  ```json
  {
    "username": "user",
    "password": "password"
  }
  ```

### Защищенные маршруты (требуют JWT токен)

- `GET /api/protected/profile` - Получение профиля пользователя
- `GET /api/protected/data` - Получение защищенных данных

## Тестирование

### Тестирование API с помощью Postman

1. Регистрация пользователя:
   - Метод: POST
   - URL: http://localhost:5001/api/auth/register
   - Body (JSON):
     ```json
     {
       "username": "testuser",
       "password": "password123"
     }
     ```

2. Авторизация пользователя:
   - Метод: POST
   - URL: http://localhost:5001/api/auth/login
   - Body (JSON):
     ```json
     {
       "username": "testuser",
       "password": "password123"
     }
     ```
   - Сохраните полученный JWT токен

3. Доступ к защищенному маршруту:
   - Метод: GET
   - URL: http://localhost:5001/api/protected/profile
   - Headers:
     ```
     Authorization: Bearer <ваш_jwt_токен>
     ```

## Возможные проблемы и их решения

1. **"Network Error" при запросах с фронтенда:**
   - Убедитесь, что бэкенд запущен и работает на порту 5001
   - Проверьте, что в коде фронтенда используется правильный URL API (http://localhost:5001/api)
   - Проверьте настройки CORS на бэкенде

2. **Ошибка "EADDRINUSE" при запуске бэкенда:**
   - Порт 5001 уже используется другим процессом
   - Измените порт в файле .env или остановите процесс, использующий этот порт

3. **Ошибка "JWT must be provided" при доступе к защищенным маршрутам:**
   - Проверьте, что вы добавляете токен в заголовок Authorization
   - Токен должен быть передан в формате: `Bearer <token>`
