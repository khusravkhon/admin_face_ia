import api from 'data/axios';

export default {
  refreshUser() {
    return api.get('User/GetAll');
  },
  UserId(user) {
    return api.get(`User/GetById/${user}`);
  },
  createUser(user) {
    return api.post('User/Create', user);
  },
  editUser(user) {
    return api.put('User/Update', user);
  },
  deleteUser(user) {
    return api.delete(`User/Delete?id=${user}`);
  }
};
