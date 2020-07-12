import React from 'react'
import {Button } from 'antd';
import UpLoadFile from './UpLoadFile'
import NodesAdd from './NodesAdd'
import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        };
    }

    wordLimit = (isActive) => {
        this.setState({
            active: isActive
        });
    }

    render() {
        const props = {
            wordLimit: this.wordLimit
        }
        return (
            <div className='main'>
                <UpLoadFile />
                <NodesAdd {...props}/>
                <div className='button'>
                    <Button>取消</Button>
                    <Button disabled={!this.state.active}>开始上传</Button>
                </div>
            </div>
        );
    }
}
