import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import CreateReviewForm from './createReviewForm';
import {createReview} from '../../actions/review/review';

const mapStateToProps = (state,ownProps) => {
  return {
    business_id: ownProps.match.params.business_id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CreateReviewForm));
