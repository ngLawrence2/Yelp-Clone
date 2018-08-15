import React from 'react';
import {Link} from 'react-router-dom';


class SearchNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: this.props.filters.find,
      near:this.props.filters.near
    };
    this.handleSubmit=this.handleSubmit.bind(this);

  }

  displaySession() {
    if(this.props.currentUser) {
      return ( <Link to = "/login">Log In</Link> );
    } else {
      return (<button onClick={this.props.logOutUser}>LogOut</button>);
    }
  }


  handleUpdate(field) {
      return e => this.setState({[field]:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const filter = {
      near: this.state.near,
      find: this.state.find
    };
    this.props.saveFilter(filter);
    this.props.history.push({
      pathname: '/businesses',
      search: `find=${this.state.find}&near=${this.state.near}`
    });
    this.props.fetchBusinesses(filter);
  }

  render() {
    return (
      <div className="header">
            <div className="searchBarNav">
              <div className="searchLogo">
                <Link to = "/"><img src = {window.images.logo} /></Link>
              </div>
              <form>
                <div className="searchBar">
                  <span>
                    <span className="catergory">Find</span>
                      <input type="text"
                        onChange={this.handleUpdate('find')} placeholder="burgers, barbers ,spas, handymen..." value={this.state.find}/>
                  </span>
                  <span>
                    <span className="catergory">Near</span>
                  <input type="text" onChange={this.handleUpdate('near')} placeholder="San Francisco" value={this.state.near} />
                  </span>
                <button type="button" onClick={this.handleSubmit}><Link to = "/businesses"><img src = {window.images.search} /></Link></button>
                </div>
            </form>
              <div className="signUpButton">
                <Link to ="/signUp">Sign Up</Link>
              </div>
            </div>
            <div className="quickLinkContainer">
            <div className="headerLinks">
              <div className="links">
                <Link to = "#"><img src = {window.images.restaurant} />Restaurants</Link>
                <Link to ="#"><img src = {window.images.nightlife} />NightLife</Link>
                <Link to ="#"><img src = {window.images.homeServices} />Home Services</Link>
                <Link to ="#"><img src = {window.images.delivery} />Delivery</Link>
                <Link to ="#">Write a Review</Link>
                <Link to ="#">Talk</Link>
                <Link to ="#">Events</Link>
              </div>
              <div className="LogIn">
              <Link to = "/login">Log In</Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchNavBar;
