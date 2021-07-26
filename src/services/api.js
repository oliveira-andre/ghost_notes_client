import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:3002/api/v1'
});

export default Api;
