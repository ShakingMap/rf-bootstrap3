import React from 'react';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class DatetimeLocal extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled, ...otherProps} = this.props;

        if (value === null) value = '';

        return <div className={validationState ? ('has-'+validationState):''}>
            <input
                id={id}
                className="form-control"
                type="datetime-local"
                value={value}
                onChange={e=>onChange(e.target.value, e)}
                readOnly={readOnly}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    }
}

DatetimeLocal.propTypes = propTypes;
DatetimeLocal.defaultProps = defaultProps;

export default DatetimeLocal;