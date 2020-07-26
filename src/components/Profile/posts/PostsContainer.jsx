import Posts from './Posts';
import {connect} from 'react-redux'
import {addPostActionCreater} from '../../../redux/reducers/addNewPostReducer';

const MapStateToProps = (state) => {
    return {msg: state.profilePage}
  
}
const MapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreater: (text) => dispatch(addPostActionCreater(text))
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Posts);
