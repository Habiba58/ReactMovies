import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        errorMessage: "",
    }
    users = {
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
        //  localStorage.setItem("token",data.token);
        // Route to the home page
        // this.props.history.push("/home");
        //     }
        //else{
        // this.setState({
        //  errorMessage:data.message;
        //})  
        // }
        this.props.history.push("/home");

    }
    //  After the password inside fragments;
    //<div className="alert alert-danger text-center">
    //{this.state.errorMessage}
    //</div>
    render() {
        return (
            <>

                <div className="w-75 mx-auto my-4 form">
                    <h2 className="mb-3">Login Form</h2>
                    <form onSubmit={this.sendData}>
                        <label htmlFor="">Email:</label>
                        <input onChange={this.getFormData} type="email" name="email" className="form-control mb-4" />
                        <label htmlFor="">Password:</label>
                        <input onChange={this.getFormData} type="password" name="password" className="form-control mb-4" />
                        <div className='d-flex justify-content-between'>
                            <p className='mt-3'>Don't have an account?Register</p>
                            <button className="btn btn-info float-right my-4">Login</button>
                        </div>

                    </form>

                </div>

            </>
        )
    }
}
