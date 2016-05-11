import React from 'react';
import nid from 'nid';

const propTypes = {
    validationState: React.PropTypes.any,
    id: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Text extends React.Component {
    render() {
        let {validationState, id, value, onChange, readOnly, disabled, ...otherProps} = this.props;

        if (value === null) value = '';

        return <div className={validationState ? ('has-'+validationState):''}>
            <input
                id={id}
                className="form-control"
                value={value}
                onChange={e=>onChange(e.target.value, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    }
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;