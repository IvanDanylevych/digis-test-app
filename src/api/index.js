import axios from 'axios';

const base_url = 'https://api.openweathermap.org/data/2.5/forecast';
const API_key = 'bad46dfee1ae1125ec4faf31e63449de';

export const getCity = (city_name = '') => axios.get(`${base_url}?q=${city_name}&appid=${API_key}`);
