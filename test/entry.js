require('bootstrap/dist/css/bootstrap.css');

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Text,
    Password,
    File
} from '../lib';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'test text',
            password: 'test password',
            file: undefined
        }
    }

    render() {
        return <div>
            <Text {...{
                label: 'Text',
                validationState: 'success',
                validationMessage: 'ok',
                value: this.state.text,
                onChange: (value)=>this.setState({text: value})
            }}/>
            <Password {...{
                label: 'Password',
                validationState: 'success',
                validationMessage: 'ok',
                value: this.state.password,
                onChange: (value)=>this.setState({password: value})
            }}/>
            <File {...{
                label: 'File',
                validationState: 'success',
                validationMessage: 'ok',
                value: this.state.file,
                onChange: (value)=> this.setState({file: value})
            }}/>
        </div>
    }
}

let root = document.getElementById('root');
if (!root) {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
}

ReactDOM.render(
    <TestPage/>,
    root
);
