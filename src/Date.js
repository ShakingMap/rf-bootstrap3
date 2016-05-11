import React from 'react';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.instanceOf(Date),
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class DateField extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled, ...otherProps} = this.props;

        return <div className={validationState ? ('has-'+validationState):''}>
            <input
                id={id}
                className="form-control"
                type="date"
                value={value === undefined ? undefined : value === null ? '' :  value.toISOString().slice(0, value.toISOString().indexOf('T'))}
                onChange={e=>onChange(e.target.value ? new Date(e.target.value) : null, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;
DateField.displayName = 'Date';

export default DateField;