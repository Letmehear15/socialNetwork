import {connect} from 'react-redux'
import {addMsgActionCreater,addNewMsgActionCreater} from '../../redux/reducers/addNewMsgReducer';
import Message from './Dialogs'
import { withAuthRedirect } from '../../hoc/authRedirect';
import { compose } from 'redux';

const MapStateToProps = (state) => {
    return {
        sendMsg: state.sendMsg,
        textMsg: state.textMsg,
        messages: state.messagePage
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        sendMsg: () => {
            dispatch(addMsgActionCreater());
            dispatch(addNewMsgActionCreater(''));
        },
        textMsg: (text) => {
            dispatch(addNewMsgActionCreater(text));
        }
    }
}

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Message)