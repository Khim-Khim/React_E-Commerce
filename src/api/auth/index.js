import axiosInstance from '../axios';

const AuthApi = {
  register(data) {
    return axiosInstance.post('auth/registerUser', data);
  },
  login(data) {
    return axiosInstance.post('auth/login', data);
  },
  logout() {},
};

export default AuthApi;
