export const getSomeData = () => {
  return axios.get('https://example.com/api/data');
};

export const postData = (data) => {
  return axios.post('https://example.com/api/data', data);
};

export const updateData = (id, data) => {
  return axios.put(`https://example.com/api/data/${id}`, data);
};

export const deleteData = (id) => {
  return axios.delete(`https://example.com/api/data/${id}`);
};

// 

import React, { useEffect } from 'react';
import { getSomeData, postData, updateData, deleteData } from './api';
import {axios} from "axios"

const MyComponent = () => {
  useEffect(() => {
    getSomeData()
      .then(response => {
        // Обработка данных после успешного запроса
      })
      .catch(error => {
        // Обработка ошибки
      });
  }, []);
};





// api.js

import axios from 'axios';

export const postData = (data) => {
  return axios.post('https://example.com/api/data', data);
};



// YourComponent.js

import React, { useState } from 'react';
import { postData } from './api';

const YourComponent = () => {
  const [formData, setFormData] = useState({
    // Ваши данные для POST запроса
  });

  const handleFormSubmit = () => {
    postData(formData)
      .then(response => {
        // Обработка данных после успешного POST запроса
      })
      .catch(error => {
        // Обработка ошибки при POST запросе
      });
  };

  return (
    <div>
      {/* Ваша форма для ввода данных */}
      <button onClick={handleFormSubmit}>Отправить данные</button>
    </div>
  );
};

export default YourComponent;
