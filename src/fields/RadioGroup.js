import React from 'react';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    items: React.PropTypes.object, // key:{label, readOnly, disabled}
    inline: React.PropTypes.bool
};

const defaultProps = {
    onChange(){}
};

class RadioGroup extends React.Component {
    render() {
        let {id, validationState, value, onChange, readOnly, disabled,
            items, inline,
            ...otherProps} = this.props;

        if (value === null) value = '';
        if (!items) items = {};

        return <div className={validationState ? ('has-'+validationState):''}>
            {
                Object.keys(items).map((key, index)=> <div key={key} className={inline? 'radio-inline':'radio'}>
                    <label>
                        <input
                            {...{
                                ref: key,
                                name: id,
                                type: 'radio',
                                checked: value === undefined ? undefined : value === key,
                                disabled: items[key].disabled || disabled,
                                readOnly: items[key].readOnly || readOnly,
                                onChange: e=> onChange(key, e)
                            }}
                        />
                        {items[key].label}
                    </label>
                </div>)
            }
        </div>
    }
}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;

export default RadioGroup;