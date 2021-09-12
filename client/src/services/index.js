import axios from 'axios';

class BaseApi {
  constructor() {
    this.host = process.env.REACT_APP_API_URL;
    this.config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    }
    this.messError = 'Unexpected Error!'

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
  }

  async get(url, body = {}) {
    const params = {
      ...body
    }
    try {
      const result = await axios.get(`${this.host}${url}`, { params });
      return result.status === 200 ? result.data : this.messError;
    } catch (err) {
      throw this.messError
    }

  }

  async post(url, body) {
    try {
      const result = await axios.post(`${this.host}${url}`, body);
      return result.status === 200 ? result.data : this.messError;
    } catch (err) {
      throw this.messError
    }
  }

  async put(url, body) {
    try {
      const result = await axios.put(`${this.host}${url}`, body);
      return result.status === 200 ? result.data : this.messError;
    } catch (err) {
      throw this.messError
    }
  }
}

const request = new BaseApi();

export default request;
