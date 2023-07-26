import React, { Component } from 'react'
import axios from "axios"
export default class Register extends Component {
    users = {
        first_name: "",
        last_name: "",
        age: "",
        email: "",
        password: ""
    }
    getFormData = (e) => {
        this.users[e.target.name] = e.target.value;
        console.log(this.users);
    }
    sendData = (e) => {
        e.preventDefault(); // prevent the default behavoir of form which is reload.
        // let {data}= await axios.post("link API",this.users); API link is not working 
        // function should be async
        //if(data.message==="success"){
        //    e.target.reset();
        //     }

    }
    render() {
        return (
            <>
                <div className="w-75 mx-auto my-4 form">
                    <h2 className="mb-3">Registeration Form</h2>
                    <form onSubmit={this.sendData}>
                        <label htmlFor="">First Name:</label>
                        <input onChange={this.getFormData} type="text" name="first_name" className="form-control mb-4" placeholder="Fist Name" />
                        <label htmlFor="">Last Name:</label>
                        <input onChange={this.getFormData} type="text" name="last_name" className="form-control mb-4" placeholder="Last Name" />
                        <label htmlFor="">Age:</label>
                        <input onChange={this.getFormData} type="text" name="age" className="form-control mb-4" placeholder="Age" />
                        <label htmlFor="">Email:</label>
                        <input onChange={this.getFormData} type="email" name="email" className="form-control mb-4" placeholder="Email" />
                        <label htmlFor="">Password:</label>
                        <input onChange={this.getFormData} type="password" name="password" className="form-control mb-4" />
                        <button className="btn btn-info float-right my-4">Register</button>
                    </form>

                </div>
            </>
        )
    }
}
