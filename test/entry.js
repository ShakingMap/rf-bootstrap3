require('bootstrap/dist/css/bootstrap.css');

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Wrapper,
    Input,
    Text,
    Password,
    File,
    Textarea,
    CheckboxGroup,
    Date as DateField,
    DatetimeLocal,
    Number as NumberField,
    Checkbox
} from '../lib';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            password: null,
            file: null,
            textarea: null,
            datefield: null,
            datetimeLocal: null,
            number: null,
            checkbox: null,
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
            <Wrapper {...{
                label: 'Date',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'date-field'
            }}>
                <DateField {...{
                    id: 'date-field',
                    validationState: 'error',
                    value: this.state.datefield,
                    onChange: (value)=>this.setState({datefield: value})
                    //value: undefined,
                    //onChange: (value)=>console.log(value)
                }}/>
            </Wrapper>
            <Wrapper {...{
                label: 'Datetime Local',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'datetime-local-field'
            }}>
                <DatetimeLocal {...{
                    id: 'datetime-local-field',
                    validationState: 'error',
                    value: this.state.datetimeLocal,
                    onChange: (value)=>this.setState({datetimeLocal: value})
                    //value: undefined,
                    //onChange: (value)=>console.log(value)
                }}/>
            </Wrapper>
            <Wrapper {...{
                label: 'Number',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'number-field'
            }}>
                <NumberField {...{
                    id: 'number-field',
                    validationState: 'error',
                    value: this.state.number,
                    onChange: (value)=>this.setState({number: value})
                    //value: undefined,
                    //onChange: (value)=>console.log(value)
                }}/>
            </Wrapper>
            <Wrapper {...{
                label: 'Checkbox',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'checkbox-field'
            }}>
                <Checkbox {...{
                    id: 'checkbox-field',
                    validationState: 'error',
                    label: '?',
                    value: this.state.checkbox,
                    onChange: (value)=>this.setState({checkbox: value})
                    //value: undefined,
                    //onChange: (value)=>console.log(value)
                }}/>
            </Wrapper>
            <Wrapper {...{
                label: 'Checkbox Group',
                validationState: 'success',
                validationMessage: 'ok',
                id: 'checkbox-group-field'
            }}>
                <CheckboxGroup {...{
                    id: 'checkbox-group-field',
                    validationState: 'error',
                    items: {
                        a: {label: 'A'},
                        b: {label: 'B'},
                        c: {label: 'C', readOnly: true},
                        d: {label: 'D', disabled: true}
                    },
                    inline: true,
                    //value: this.state.checkboxGroup,
                    //onChange: (value)=>this.setState({checkboxGroup: value})
                    value: undefined,
                    onChange: (value)=>console.log(value)
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
