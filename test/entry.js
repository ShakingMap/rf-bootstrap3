require('bootstrap/dist/css/bootstrap.css');

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Text,
    Password,
    File,
    Textarea,
    CheckboxGroup
} from '../lib';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            password: null,
            file: null,
            textarea: null,
            checkboxGroup: null
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
            <Textarea {...{
                label: 'Textarea',
                validationState: 'success',
                validationMessage: 'ok',
                value: this.state.textarea,
                onChange: (value)=>this.setState({textarea: value})
            }}/>
            <CheckboxGroup {...{
                label: 'Checkbox Group',
                validationState: 'success',
                validationMessage: 'ok',
                value: this.state.checkboxGroup,
                onChange: (value)=>{console.log(value);this.setState({checkboxGroup: value})},
                items: {a: {label: 'A'}, b: {label:'B'}, c:{label: 'C', disabled: true}, d:{label: 'D', readOnly: true}}
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
