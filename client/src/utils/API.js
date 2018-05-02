import axios from "axios";

//calls to server saved in one place, take as needed for compnents
//penis
export default {

    saveDog: function(dogData) {
      return axios.post("/api/dog", dogData);
    },

    updateDog: function(id, dogData) {
      return axios.post("/api/dog", dogData);
    },

    getDogs: function(){
      return axios.get("/api/dog");
    },

    getDog: function(id){
      return axios.get("/api/dog" + id);
    },


    saveUser: function(userData) {
      return axios.post("/api/user", userData);
    },

    updateUser: function(id, userData) {
      return axios.post("/api/user", userData);
    },

    getUser: function(id){
      return axios.get("/api/user" + id);
    },
};