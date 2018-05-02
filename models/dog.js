const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dogSchema = new Schema({
 name: {
   type: String
 },
 image: {
   type: String
 },
 size: {
   type: String
 },
 breed: {
   type: String,
 },
 weight: {
   type: String
 },
 temperment: {
   type: String,
   required: false
 },
 sex: {
   type: String,
   required: true
 },
 pickupDate: {
   type: Date,
   default: Date.now
 },
 status: {
   type: String,
   required: true
 },
 isChopped: {
   type: Boolean,
   required: true
 },
 isChipped: {
   type: Boolean,
   required: false
 },
 hasVacc: {
   type: Boolean,
   required: true
 },
 story: {
   type: String,
   required: true
 }
});
const dog = mongoose.model("dog", dogSchema);

module.exports = dog; 