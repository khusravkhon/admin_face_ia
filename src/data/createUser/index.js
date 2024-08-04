import api from 'data/axios';

export default {
  refreshUser() {
    return api.get('people');
  },
  UserId(id) {
    return api.get(`people/${id}`);
  },
  createUser(data) {
    return api.post('people', data);
  },
  editUser(data) {
    return api.put(`people/${data.id}`, data);
  },
  deleteUser(id) {
    return api.delete(`people/${id}`);
  }
};
