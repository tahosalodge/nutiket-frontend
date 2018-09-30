import axios from 'axios';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default async function apiRequest(url, method = 'GET', body = null) {
  const token = localStorage.getItem('token');
  const params = {
    method,
    url: `/api${url}`,
    headers: {},
  };
  if (!isDevelopment) {
    params.url = `${process.env.REACT_APP_API_URL}${params.url}`;
  }
  if (body) {
    params.data = body;
  }
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }
  try {
    const { data } = await axios(params);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
