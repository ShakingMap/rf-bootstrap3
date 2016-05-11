require('bootstrap/dist/css/bootstrap.css');

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Wrapper,
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
            <Wrapper {...{
                label: 'Text',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'text-field'
            }}>
                <Text {...{
                    id: 'text-field',
                    validationState: 'error',
                    value: this.state.text,
                    onChange: (value)=>this.setState({text: value})
                    //value: undefined,
                    //onChange: (value)=>console.log(value)
                }}/>
            </Wrapper>
            <Wrapper {...{
                label: 'Password',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'password-field'
            }}>
                <Password {...{
                    id: 'password-field',
                    validationState: 'error',
                    value: this.state.password,
                    onChange: (value)=>this.setState({password: value})
                    //value: undefined,
                    //onChange: (value)=>console.log(value)
                }}/>
            </Wrapper>
            <Wrapper {...{
                label: 'Textarea',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'textarea-field'
            }}>
                <Textarea {...{
                    id: 'textarea-field',
                    validationState: 'error',
                    value: this.state.textarea,
                    onChange: (value)=>this.setState({textarea: value})
                    //value: undefined,
                    //onChange: (value)=>console.log(value)
                }}/>
            </Wrapper>
            <Wrapper {...{
                label: 'File',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'file-field'
            }}>
                <File {...{
                    id: 'file-field',
                    validationState: 'error',
                    value: this.state.file,
                    onChange: (value)=>this.setState({file: value})
                    //value: undefined,
                    //onChange: (value)=>console.log(value)
                }}/>
            </Wrapper>
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
