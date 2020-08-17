import {connect} from 'react-redux'
import {addMsgActionCreater} from '../../redux/reducers/addNewMsgReducer';
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

export default compose(
    connect(MapStateToProps, {addMsgActionCreater}),
    withAuthRedirect
)(Message)