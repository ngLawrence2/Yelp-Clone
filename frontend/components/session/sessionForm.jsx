import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formType = this.formType.bind(this);
    this.demoLogin= this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleUpdate(field) {
    return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  demoLogin(e) {
    e.preventDefault();
    let demoUser = {
        email:'DemoUser@demo.com',
        password:'demouser'
    }

    this.props.demoLogin(demoUser);
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((er,idx)=> {

          if(er.indexOf('Fname') !==-1) {
            er = "First Name can't be blank";
          }
          if(er.indexOf('Lname') !==-1) {
            er = "First Name can't be blank";
          }
          if(er.indexOf('Zip Code') !==-1) {
            er = "Zip Code can't be blank";
          }

          return (<ul key={idx}>{er}</ul>)
        })}
      </ul>
    );
  }

  changeLink() {
    if(this.props.formType==="Sign Up") {
      return (
        <div className="changeLink">
          Already on Yelp? <Link to="/login">Log in</Link>
        </div>);
    }else {
      return (
        <div className="changeLink">
          New to Yelp? <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }


  formType() {
    if(this.props.formType==="Sign Up") {
      return (
        <div>
          <span className="nameInput">
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
        </span>
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
      <div className="session">
        <header className="sessionHeader">
          <img className = "headerStars" src = {window.images.header_stars} />
          <img className="headerLogo" src = {window.images.logo} />
        </header>
      <div className= "signUpForm">


        <form>
        <h2> {this.props.formType}</h2>
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
           <button onClick={this.demoLogin}>Demo Login</button>
          {links}
          <div className = "errorsList">
              {this.renderErrors()}
          </div>
        </form>
          <div className = "pictureContainer">
            <img src = {window.images.session}/>
          </div>
      </div>

      <div>
          <Footer />
      </div>

    </div>
    );
  }
}
export default SessionForm;
