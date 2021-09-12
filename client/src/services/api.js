import api from './';

export const updateStoreService = (body) => api.put(`/api/stores/${body.id}`, body);
export const getStoresService = () => api.get('/api/stores');
export const addStoreService = (body) => api.post('/api/stores', body);