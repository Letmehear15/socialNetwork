import React from 'react';
import c from './Status.module.css'

class Status extends React.Component {
    state = {
        editModal: false,
        status: this.props.status
    }

    onModalShow = () => {
        this.setState({
            editModal: !this.state.editModal
        })
    }

    deactivateModal = () => {
        this.props.changeStatus(this.state.status)
    }

    onChangeText = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={c.status}>
                {!this.state.editModal &&
                    <div className={c.statusText}>
                        <span onDoubleClick={this.onModalShow}>{this.props.status || '-----'}</span>
                    </div>
                }
                
                {this.state.editModal &&
                    <div className={c.statusInput}>
                        <input 
                            autoFocus  
                            onBlur={() => {this.onModalShow(); this.deactivateModal()}} 
                            type="text" 
                            value={this.state.status}
                            onChange={(e) => this.onChangeText(e)}/>
                    </div>  
                }
            </div>
        )
    }   
}

export default Status