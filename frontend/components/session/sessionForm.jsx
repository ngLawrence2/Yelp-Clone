import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formType = this.formType.bind(this);
  }

  handleUpdate(field) {
    return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  formType() {
    if(this.props.formType==="signUp") {
      return (
        <div>
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

          <label>Zip Code
            <input type="text"
              value={this.state.zipCode}
              onChange={this.handleUpdate('zipCode')} />
          </label>
      </div>
      );
    }
  }

  render() {
    const signUpForms = this.formType();
    return (
      <div className= "signUpForm">
        <h2> {this.props.formType}</h2>
        <form>
          {signUpForms}
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
           <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}
export default SessionForm;
