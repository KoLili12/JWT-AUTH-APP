import React, { useState, useEffect } from 'react';
import AuthService from '../services/auth.service';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [protectedData, setProtectedData] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUserProfile();
    fetchProtectedData();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await AuthService.getProfile();
      setUserData(response.data.user);
    } catch (error) {
      const resMessage = 
        (error.response && 
          error.response.data && 
          error.response.data.message) ||
        error.message ||
        error.toString();
      
      setMessage(resMessage);
    }
  };

  const fetchProtectedData = async () => {
    try {
      const response = await AuthService.getProtectedData();
      setProtectedData(response.data.data);
    } catch (error) {
      const resMessage = 
        (error.response && 
          error.response.data && 
          error.response.data.message) ||
        error.message ||
        error.toString();
      
      setMessage(resMessage);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Панель управления</h1>
      
      {message && (
        <div className="alert alert-danger">
          {message}
        </div>
      )}

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">
              <h4>Профиль пользователя</h4>
            </div>
            <div className="card-body">
              {userData ? (
                <div>
                  <p><strong>ID:</strong> {userData.id}</p>
                  <p><strong>Имя пользователя:</strong> {userData.username}</p>
                </div>
              ) : (
                <p>Загрузка данных...</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Защищенные данные</h4>
            </div>
            <div className="card-body">
              {protectedData ? (
                <ul className="list-group">
                  {protectedData.map(item => (
                    <li key={item.id} className="list-group-item">
                      {item.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Загрузка данных...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;