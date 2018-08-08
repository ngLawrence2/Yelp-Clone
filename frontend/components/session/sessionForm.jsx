import React from 'react';
import {Link} from 'react-router-dom';

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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((er,idx)=> {
          return (<li key={idx}>{er}</li>)
        })}
      </ul>
    );
  }

  changeLink() {
    if(this.props.formType==="Sign Up") {
      return (
        <div>
          Already on Yelp? <Link to="/login">Log in</Link>
        </div>);
    }else {
      return (
        <div>
          New to Yelp? <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }
  

  formType() {
    if(this.props.formType==="Sign Up") {
      return (
        <div>
          <label>
            <input type="text"
              value={this.state.fname}
              onChange={this.handleUpdate('fname')}
              placeholder="First name"/>
          </label>

          <label>
            <input type="text"
              value={this.state.lname}
              onChange={this.handleUpdate('lname')}
              placeholder="Last name" />
          </label>

          <label>
            <input type="text"
              value={this.state.zipCode}
              onChange={this.handleUpdate('zipCode')}
              placeholder="Zip Code"/>
          </label>
      </div>
      );
    }
  }



  render() {
    const signUpForms = this.formType();
    const links = this.changeLink();
    return (
      <div className= "signUpForm">
          {this.renderErrors()}
        <h2> {this.props.formType}</h2>
        <form>
          {signUpForms}
          <label>
            <input type="text"
              value={this.state.email}
              onChange={this.handleUpdate('email')}
              placeholder="Email" />
           </label>

           <label>
             <input type="text"
               value={this.state.password}
               onChange={this.handleUpdate('password')}
               placeholder="password"/>
           </label>
           <button onClick={this.handleSubmit}>{this.props.formType}</button>
           {links}
        </form>
      </div>
    );
  }
}
export default SessionForm;
