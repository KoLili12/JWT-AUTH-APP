import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1>JWT Authentication App</h1>
        <p className="lead">
          Простое веб-приложение с аутентификацией на основе JWT токенов
        </p>
        <hr className="my-4" />
        <p>
          Для начала работы зарегистрируйтесь или войдите в систему, если у вас уже есть аккаунт.
        </p>
        <Link to="/register" className="btn btn-primary me-2">
          Регистрация
        </Link>
        <Link to="/login" className="btn btn-success">
          Вход
        </Link>
      </div>
    </div>
  );
};

export default Home;