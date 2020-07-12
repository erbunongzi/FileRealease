import React from 'react';
import { Upload, Button } from 'antd';
import './NodesAdd.css'

export default class nodesAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            length: 0,
            limited: false
        }
    }

    renderTitle() {
        return (
            <div className='title'>
                <div className='title-number'>
                    <span>2</span>
                </div>
                <span className='title-name'>添加备注</span>
            </div>
        );
    }

    valueChange = (e) => {
        const {wordLimit} = this.props
        const editValue = e.target.value;
        this.setState({
            value: editValue,
            length: editValue.length,
        },() => {
            if(this.state.value.length >= 100) {
                let isButtonActive = false;
                wordLimit(isButtonActive);
                this.setState({
                    limited: true
                })
            } else {
                if(this.state.limited) {
                    wordLimit(this.state.limited);
                    this.setState({
                        limited: false
                    })
                }
            }
        })
    }

    render() {
        const {limited} = this.state

        return (
            <div className='nodes-add'>
                {this.renderTitle()}
                <div className='bottom'>
                    <textarea   className='bottom-input'
                                placeholder='请输入' 
                                onChange={this.valueChange}
                                value={this.state.value}
                    />
                    <span style={{color: limited? 'rgba(247, 76, 96, 1)': '#ddd'}}>{this.state.length}/100</span>
                </div>
            </div>
        );
    }
}

