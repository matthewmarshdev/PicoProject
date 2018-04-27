import axios from "axios";

//calls to server saved in one place, take as needed for components

export default {
  // Gets all books
  getDogs: function() {
    return axios.get("/api/dogs");
  },

  // gets user with given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a user to the database **KNOWN WORKING***
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  saveDogs: function(dogData) {
    return axios.post("/api/dogs", dogData);
  }
};
