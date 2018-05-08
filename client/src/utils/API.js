import axios from "axios";

export default {
  addDog: function (userData) {
    return axios.post("/api/dogs", userData);
  },
  getDogs: function () {
    return axios.get('/api/dogs')
    //  getDogs: () => return axios.get('/api/dogs'),
  },
  getDogsById: function (id) {
    return axios.get('/api/dogs/' + id)
    // getDogById: id => axios.get('/api/dogs/' + id),
  },

  updateDogbyId: function (id) {
    return axios.put('/api/dogs/' + id)
    // updateDogById: id => axios.put('/api/dogs/' + id),
  },

  saveUser: function (userData) {
    // console.log(userData);
    return axios.post("/api/users", userData);
  },

  // This portion is not working, the axious .post/.update routes are not working
  // -----------------------------------------------
  getUserByEmail: function (userEmail) {
    return axios.get("/api/users/" + userEmail);
    // Has no body gets reference to the user off of the email
    // getUserByEmail: userEmail => axios.get("/api/user/" + userEmail),
  },

  updateUserByEmail: function(userEmail) {
    return axios.post("/api/users/" + userEmail);
    // Expects all needed information in the body
    //updateUserById: () => axios.update("/api/user");
  },

  // ----------------------------------------------
  updateUser: function() {
    return axios.put('/api/users/');
  },
   login: userData => {
   	console.log(userData);
   	return axios.post('/api/user/submitLogin', userData);
  }
}