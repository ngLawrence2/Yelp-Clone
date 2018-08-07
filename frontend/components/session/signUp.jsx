import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      fname:'',
      lname:'',
      password:'',
      birthday: null,
      zipCode: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(field) {
    return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state);
  }

  render() {
    return (
      <div className= "signUpForm">
        <h2> Sign Up!</h2>
        <form>

         <label>First Name
           <input type="text"
             value={this.state.fname}
             onChange={this.handleUpdate('fname')} />
         </label>

         <label>Last Name
           <input type="text"
             value={this.state.lname}
             onChange={this.handleUpdate('lname')} />
         </label>

          <label>Email
            <input type="text"
              value={this.state.email}
              onChange={this.handleUpdate('email')} />
           </label>

           <label>Password
             <input type="text"
               value={this.state.password}
               onChange={this.handleUpdate('password')} />
           </label>

           <label>Zip Code
             <input type="text"
               value={this.state.zipCode}
               onChange={this.handleUpdate('zipCode')} />
           </label>


           <button onClick={this.handleSubmit}>Sign Up</button>

        </form>
      </div>
    );
  }
}
export default SignUp;
