// import api from 'data/axios';

export default {
  loginUser(login) {
    // return api.post(`Auth/Login`, login);
    return new Promise((res, rej) => {
      if(login.login == 'khusrav' && login.password == '8065khusrav') {
        res({data: {jwtToken: 'khusrav8065khusrav'}})
      }else {
        rej({message: "problec is polin or password"})
      }
    })
  }
};
