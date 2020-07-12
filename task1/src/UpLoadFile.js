import React from 'react';
import { Upload, Button } from 'antd';
import './UpLoadFile.css'



export default class UpLoadFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : '',
            isError: false
        }
    }

    upLoadProps = {
        onChange : (info) => {
            if (info.file.status !== 'uploading') {
                console.log(info.file.name);
                let str = info.file.name.split('.');
                if(str[1] !== 'csv') {
                    this.setState({
                        value: "上传的文件格式错误，请重新上传",
                        isError: true
                    });
                }else {
                    this.setState({
                        value:info.file.name,
                        isError: false,
                    });
                }
            }
        },
        showUploadList : false
    };
    
    renderTitle() {
        return (
            <div className='title'>
                <span className='title-number'>1</span>
                <span className='title-name'>文件上传</span>
            </div>
        );
    }

    render() {
        const fontStyle = 'font-error'
        return (
            <div className='upload-file'>
                {this.renderTitle()}
                <div className='bottom'>
                    <input  placeholder="仅支持csv"
                            className={this.state.isError && fontStyle}
                            value={this.state.value} 
                    />
                    <Upload {...this.upLoadProps}>
                        <Button>选择文件</Button>
                    </Upload>
                </div> 
            </div>
        );
    }
}