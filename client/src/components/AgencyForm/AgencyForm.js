// import React, { Component } from "react";
// import "./AgencyForm.css";
// import API from "../../utils/API";

// class AgencyForm extends Component {
//   state = {
//     profit: "",
//     duration: "",
//     address1: "",
//     address2: "",
//     state: "",
//     city: "",
//     zip: ""
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     console.log(name, value);
//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     console.log(this.state);
//     // the below api update method doesn't exist yet
//     API.updateUserByEmail(this.state)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div className="row formRow">
//         <form className="col s12">
//           <div className="row">
//             <div className="input-field col s12">
//               <input
//                 id="profit"
//                 name="profit"
//                 value={this.state.profit}
//                 onChange={this.handleInputChange}
//                 type="text"
//                 placeholder="Profit"
//               />
//               <span class="helper-text" data-error="wrong" data-success="right">
//                 Is your organization making a profit?
//               </span>
//             </div>
//           </div>

//           <div className="row">
//             <div className="input-field col s12">
//               <input
//                 id="duration"
//                 name="duration"
//                 value={this.state.duration}
//                 onChange={this.handleInputChange}
//                 type="text"
//                 placeholder="Length of time"
//               />
//               <span class="helper-text" data-error="wrong" data-success="right">
//                 How long can you keep dogs if no foster is available?
//               </span>
//             </div>
//           </div>
//           <div className="row">
//             <div className="input-field col s6">
//               <input
//                 id="address1"
//                 name="address1"
//                 value={this.state.address1}
//                 onChange={this.handleInputChange}
//                 type="text"
//                 className="validate"
//               />
//               <label htmlFor="address1">Address 1</label>
//             </div>
//             <div className="input-field col s6">
//               <input
//                 id="address2"
//                 name="address2"
//                 value={this.state.address2}
//                 onChange={this.handleInputChange}
//                 type="text"
//                 className="validate"
//               />
//               <label htmlFor="address2">Address 2</label>
//             </div>
//           </div>
//           <div className="row">
//             <div className="input-field col s4">
//               <input
//                 id="state"
//                 name="state"
//                 value={this.state.state}
//                 onChange={this.handleInputChange}
//                 type="text"
//                 className="validate"
//               />
//               <label htmlFor="state">State</label>
//             </div>
//             <div className="input-field col s4">
//               <input
//                 id="city"
//                 name="city"
//                 value={this.state.city}
//                 onChange={this.handleInputChange}
//                 type="text"
//                 className="validate"
//               />
//               <label htmlFor="city">City</label>
//             </div>
//             <div className="input-field col s4">
//               <input
//                 id="zip"
//                 name="zip"
//                 value={this.state.zip}
//                 onChange={this.handleInputChange}
//                 type="number"
//                 className="validate"
//               />
//               <label htmlFor="zip">Zip</label>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default AgencyForm;
