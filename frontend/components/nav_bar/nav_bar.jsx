import React from 'react';
import {Link} from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayLogOut=this.displayLogOut.bind(this);
    this.demo=this.demo.bind(this);
    this.navBar=this.navBar.bind(this);
    this.state = {
      find: '',
      near: ''
    };
    this.search=this.search.bind(this);
  }


  handleUpdate(field) {
      return e => this.setState({[field]:e.target.value})
  }

  demo() {
    let demoUser = {
      email:'DemoUser@demo.com',
      password:'demouser'
    }
    this.props.demoLogin(demoUser);
  }

  displayLogOut() {
    const {currentUser,logOutUser}=this.props
    if(currentUser) {
     return (
       <span className = "userStatus">
         <h2>
             {currentUser.fname} {currentUser.lname} </h2>
           <h2><button onClick={logOutUser}>LogOut</button></h2>
       </span>
     );
   } else {
     return (
       <span className = "userStatus">
         <h2><Link to = "/login">Log In</Link> </h2>
         <h2><Link to= "/" onClick={this.demo}>Demo Login</Link></h2>
         <h2><Link className = "signUp" to= "/signUp">Sign Up</Link></h2>
       </span>
     );
   }
  }

  search(e) {

    e.preventDefault();
    const search = {
      find:this.state.find,
      near: this.state.near
    };

    this.props.fetchBusinesses(search).then((search) => {
      console.warn(search);
      this.props.history.push("/businesses");
    });
  }

  navBar() {
    return (
      <div>

        <div className="navBar">
          <div className="allLinks">
            <h2>Write a Reiview</h2>
            <h2>Events</h2>
            <h2>Talk</h2>
          </div>

          <div className= "sessionLinks">
            {this.displayLogOut()}
          </div>

        </div>


        <div className="logoImage">
          <img src = {window.images.logo} />
        </div>
        <form onSubmit={this.search}>
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
        <input type="submit" />

        </div>
</form>
        <div className="quickLinks">
          <Link to = "#"><img src = {window.images.restaurant} />Restaurants</Link>
          <Link to ="#"><img src = {window.images.nightlife} />NightLife</Link>
          <Link to ="#"><img src = {window.images.homeServices} />Home Services</Link>
          <Link to ="#"><img src = {window.images.delivery} />Delivery</Link>
        </div>
      </div>
    );
  }debugger;

  render() {
    return(
      <div>
        {this.navBar()}
      </div>
    );
  }
}

// const NavBar = ({currentUser,logOutUser,demoLogin}) => {
//
//
//   const demo = () => {
//     let demoUser = {
//         email:'DemoUser@demo.com',
//         password:'demouser'
//     }
//     demoLogin(demoUser);
//   }
//
//   const displayLogOut=()=> {
//
//     if(currentUser) {
//       return (
//         <span className = "userStatus">
//           <h2>
//               {currentUser.fname} {currentUser.lname} </h2>
//             <h2><button onClick={logOutUser}>LogOut</button></h2>
//         </span>
//       );
//     } else {
//       return (
//
//
//         <span className = "userStatus">
//           <h2><Link to = "/login">Log In</Link> </h2>
//           <h2><Link to= "/" onClick={demo}>Demo Login</Link></h2>
//           <h2><Link className = "signUp" to= "/signUp">Sign Up</Link></h2>
//         </span>
//       );
//     }
//   }
//
//   const navBar = () => {
//       return (
//         <div>
//
//           <div className="navBar">
//             <div className="allLinks">
//               <h2>Write a Reiview</h2>
//               <h2>Events</h2>
//               <h2>Talk</h2>
//             </div>
//
//             <div className= "sessionLinks">
//               {displayLogOut()}
//             </div>
//
//           </div>
//
//
//           <div className="logoImage">
//             <img src = {window.images.logo} />
//           </div>
//
//           <div className="searchBar">
//             <span>
//               <span className="catergory">Find</span>
//               <input type="text" placeholder="burgers, barbers ,spas, handymen..."/>
//             </span>
//             <span>
//               <span className="catergory">Near</span>
//               <input type="text" placeholder="San Francisco" />
//             </span>
//             <button type="button"><img src = {window.images.search} /></button>
//           </div>
//
//           <div className="quickLinks">
//             <Link to = "#"><img src = {window.images.restaurant} />Restaurants</Link>
//             <Link to ="#"><img src = {window.images.nightlife} />NightLife</Link>
//             <Link to ="#"><img src = {window.images.homeServices} />Home Services</Link>
//             <Link to ="#"><img src = {window.images.delivery} />Delivery</Link>
//           </div>
//         </div>
//       );
//   }
//
//   return (
//     <div>
//       {navBar()}
//     </div>
//   );
// }

export default NavBar;
