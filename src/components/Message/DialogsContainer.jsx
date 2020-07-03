import {connect} from 'react-redux'
import {addMsgActionCreater,addNewMsgActionCreater} from '../../redux/reducers/addNewMsgReducer';
import Message from './Dialogs'

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
export default connect(MapStateToProps, MapDispatchToProps)(Message);