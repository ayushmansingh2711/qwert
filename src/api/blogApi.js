import axios from 'axios';
const backendUrl= import.meta.env.VITE_APP_BACKEND_URL

// Base Axios instance
const apiClient = axios.create({
  baseURL: backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility to handle errors
const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 200 range
    console.error('Response error:', error.response.data);
    throw new Error(error.response.data.message || 'Something went wrong with the server.');
  } else if (error.request) {
    // Request was made but no response received
    console.error('No response:', error.request);
    throw new Error('No response received from the server.');
  } else {
    // Other errors
    console.error('Error:', error.message);
    throw new Error(error.message || 'An unexpected error occurred.');
  }
};

// Fetch data (GET request)
export const fetchApi = async (url) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Create an item (POST request)
export const createItem = async (url, data) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Update an item (PUT request)
export const updateItem = async (url, data) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Delete an item (DELETE request)
export const deleteItem = async (url) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fetch data with pagination
export const fetchWithPagination = async (url, page, limit) => {
  try {
    const response = await apiClient.get(url, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return {
      data: response.data,
      // total: parseInt(response.headers['x-total-count'], 10),
    };
  } catch (error) {
    handleError(error);
  }
};
