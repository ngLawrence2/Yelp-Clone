import React from 'react';
class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.showBlankStar=this.showBlankStar.bind(this);
    this.showCorrectStar=this.showCorrectStar.bind(this);
    this.state = {
      rating: 5,
      body: ''
    };
  }

  handleSubmit(e) {

    const reviewObj = {
      body:this.state.body,
      rating: this.state.rating,
      business_id: this.props.business_id
    };

    this.props.createReview(reviewObj).then((res) => {
      that.props.history.push({
        pathname:`/business/${this.props.business_id}/writeReview`
      });
    });
  }

  handleUpdate(field) {
    return e => this.setState({[field]:e.target.value})
  }

  handleChange(e) {
    this.setState({rating: e.target.value });

  }

  showCorrectStar(rating) {

    const correctStar = "reviewStars" + rating;
    return (<div className={correctStar}></div>)
  }

  showBlankStar() {
    return (<div className="blankStar"></div>);
  }

  render() {
    const formPlaceHolder = "Your review helps others learn about great local businesses.\n \n Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.";
    const ratingArray = Array.from(new Array(parseInt(this.state.rating)),(val,index)=>index);
    const displayCorrectStars = ratingArray.map( (el,idx) => {
      return (
        <span key = {idx}>{this.showCorrectStar(this.state.rating)}</span>
      );
    });

    const emptyStars = Array.from(new Array(parseInt(5-this.state.rating)),(val,index)=>index);
    const displayEmptyStars = emptyStars.map( (el,idx) => {
      return (
        <span key={this.state.rating+idx}>{this.showBlankStar()}</span>
      );
    });
    return (
      <div>

        <header className="sessionHeader">
          <img className = "headerStars" src = {window.images.header_stars} />
          <img className="headerLogo" src = {window.images.logo} />
        </header>
        <div className="ReviewForm">
          <form>
          Write a Review!
          <div className="userSelectedStar">
          {displayCorrectStars} {displayEmptyStars}
          </div>
          <div onChange={this.handleChange} >
            <input type="radio" name="rating" value="1" /> 1
            <input type="radio" name="rating" value="2" /> 2
            <input type="radio" name="rating" value="3" /> 3
             <input type="radio" name="rating" value="4" /> 4
             <input type="radio" name="rating" value="5" defaultChecked={true}/>5
             </div>
            <textarea className="reviewBody" onChange={this.handleUpdate('body')} placeholder={formPlaceHolder}/>
            <button onClick={this.handleSubmit}>Post Review!</button>
          </form>
        </div>

      </div>
    );
  }
}

export default CreateReviewForm;
