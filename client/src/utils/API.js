import axios from "axios";

//calls to server saved in one place, take as needed for compnents

export default {

 addDog: function(userData) {
   return axios.post("/api/adddog", userData);
 },
 saveUser: function(userData) {
   return axios.post("/api/user", userData);
 },
 getDogs: () => {
   return axios.get('/api/getdogs');
 }

};