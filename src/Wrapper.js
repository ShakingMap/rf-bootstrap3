import React from 'react';

const propTypes = {
    label: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    id: React.PropTypes.string
};

class Wrapper extends React.Component {
    render() {
        const {label, validationState, validationMessage, id, children} = this.props;
        return <div className={"form-group"+(validationState ? (' has-'+validationState):'')}>
            {label ? <label className="control-label" htmlFor={id}>{label}</label> : null}
            {children}
            {validationMessage ? <span className="help-block">{validationMessage}</span> : null}
        </div>
    }
}

Wrapper.propTypes = propTypes;

module.exports = Wrapper