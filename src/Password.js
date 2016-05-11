import React from 'react';
import nid from 'nid';

const propTypes = {
    label: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    display: React.PropTypes.oneOf(['show', 'hide'])

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'hide'
        }
    }

    componentWillMount() {
        this.id = nid();
    }

    render() {
        let {label, validationState, validationMessage, value, onChange, readOnly, disabled,
            display,
            ...otherProps} = this.props;

        if (value === null) value = '';
        display = display || this.state.display;

        return <div className={"form-group"+(validationState ? (' has-'+validationState):'')}>
            {label ? <label className="control-label" htmlFor={this.id}>{label}</label> : null}
            <div className="input-group">
                <input
                    id={this.id}
                    type={display==='show' ? 'text' : 'password'}
                    className="form-control"
                    value={value}
                    onChange={e=>onChange(e.target.value, e)}
                    readOnly={readOnly}
                    disabled={disabled}
                    {...otherProps}
                />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.onToggleDisplay.bind(this)}>
                        <span className={`glyphicon glyphicon-eye-${display==='show'?'open':'close'}`}
                              aria-hidden="true"></span>
                    </button>
                </span>
            </div>
            {validationMessage ? <span className="help-block">{validationMessage}</span> : null}
        </div>
    }

    onToggleDisplay() {
        this.setState({display: this.state.display==='show'?'hide':'show'})
    }
}

Password.propTypes = propTypes;
Password.defaultProps = defaultProps;

export default Password;