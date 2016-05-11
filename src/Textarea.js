import React from 'react';
import nid from 'nid';

const propTypes = {
    label: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Textarea extends React.Component {
    componentWillMount() {
        this.id = nid();
    }

    render() {
        let {label, validationState, validationMessage, value, onChange, readOnly, disabled, ...otherProps} = this.props;
        if (value === null) value = '';

        return <div className={"form-group"+(validationState ? (' has-'+validationState):'')}>
            {label ? <label className="control-label" htmlFor={this.getId()}>{label}</label> : null}
            <textarea
                id={this.getId()}
                className="form-control"
                value={value}
                onChange={e=>onChange(e.target.value, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
            {validationMessage ? <span className="help-block">{validationMessage}</span> : null}
        </div>
    }

    getId() {
        return this.props.id || this.id;
    }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;