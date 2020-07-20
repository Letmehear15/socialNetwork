import Posts from './Posts';
import {connect} from 'react-redux'
import {addPostActionCreater, addNewPostActionCreater} from '../../../redux/reducers/addNewPostReducer';

const MapStateToProps = (state) => {
    return {msg: state.profilePage}
  
}
const MapDispatchToProps = (dispatch) => {
    return {
        newPost: () => {
            dispatch(addPostActionCreater());
            dispatch(addNewPostActionCreater(''));
        },
        changeText: (text) => dispatch(addNewPostActionCreater(text))
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Posts);
