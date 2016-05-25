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
        const validationClass = validationState ? (' has-' + validationState) : '';
        return <div>
            {label ? <div className={validationClass}>
                <label className="control-label" htmlFor={id}>{label}</label>
            </div> : null}
            {children}
            {validationMessage ? <div className={validationClass}>
                <span className="help-block">{validationMessage}</span>
            </div> : null}
        </div>
    }
}

Wrapper.propTypes = propTypes;

export default Wrapper