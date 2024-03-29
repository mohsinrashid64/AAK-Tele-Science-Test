// src/services/populationService.js
import axios from 'axios';

export const fetchPopulationData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/population');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};
