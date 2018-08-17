import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar.jsx';
import {Link,Redirect} from 'react-router-dom';


class AddPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoFile:null
    };
    this.handleFile=this.handleFile.bind(this);
  }

  componentWillMount() {
    this.props.fetchBusiness(this.props.match.params.business_id);
  }

  handleFile(fileList) {

    this.setState({photoFile:fileList}, () => {
      const formData = new FormData();

      formData.append('business[photos]', this.state.photoFile[0]);
      $.ajax({
        url: `/api/businesses/${this.props.match.params.business_id}`,
        method:'PATCH',
        data: formData,
        contentType: false,
        processData: false
      });

      //add ajax call that updates the user
      //redirect
    })

  }



  render() {
    if(!this.props.business) {
      return null;
    }
    console.log(this.state);
    return (
      <div>
        <div className="topNavBar">
          <SearchNavBar filters={this.props.filters} />
        </div>
        <div className= "addPhotoContainer">
          <div className= "AddPhotoDetails">
            <div className="nameContainer">
              <Link to={`/businesses/${this.props.match.params.business_id}`}><h1>{this.props.business.name}:</h1></Link> &nbsp; <span>Add Photos</span>
            </div>
            <div className="viewAllPhotos"><Link to = {`/business/${this.props.match.params.business_id}/photos`}>View All Photos</Link></div>
          </div>
        </div>

        <div className = "addPhotoBox">
          <div className="browseFiles">
            <label htmlFor="file-upload" className="custom-file-upload">
              Browse Files
          </label>
          <input id="file-upload" onChange={(e)=>this.handleFile(e.target.files)} type="file" multiple/>
          </div>
        </div>

      </div>
    );
  }
}

export default AddPhoto;
