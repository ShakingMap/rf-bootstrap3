require('bootstrap/dist/css/bootstrap.css');

import React from 'react';
import ReactDOM from 'react-dom';

import {Text} from '../lib';

class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'test text'
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
