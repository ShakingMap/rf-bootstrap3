import React from 'react';
import {cleanValue} from 'rf-fields-utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    label: React.PropTypes.string

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Checkbox extends React.Component {
    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            label,
            ...otherProps
        } = this.props;

        return <div className={'checkbox' + (validationState ? (' has-'+validationState):'')}>
            <label>
                <input
                    id={id}
                    type="checkbox"
                    checked={value}
                    onChange={e=>onChange(e.target.checked, e)}
                    readOnly={readOnly}
                    disabled={disabled}
                    {...otherProps}
                />
                {label}
            </label>
        </div>
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.cleanValue = cleanValue.bool;


export default Checkbox;