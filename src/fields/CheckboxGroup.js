import React from 'react';
import {cleanValue, formatItems} from 'rf-fields-utils';

const propTypes = {
    id: React.PropTypes.string,
    validationState: React.PropTypes.any,
    value: React.PropTypes.arrayOf(React.PropTypes.string),
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    items: React.PropTypes.object, // key:{label, readOnly, disabled} | key:label
    inline: React.PropTypes.bool
};

const defaultProps = {
    onChange(){},
    items: {}
};

class CheckboxGroup extends React.Component {
    render() {
        let {
            id, validationState, value, onChange, readOnly, disabled,
            items, inline,
            ...otherProps
        } = this.props;

        items = formatItems(items);

        return <div className={validationState ? ('has-'+validationState):''}>
            {
                Object.keys(items).map((key, index)=> <div key={key} className={inline? 'checkbox-inline':'checkbox'}>
                    <label>
                        <input
                            {...{
                                ref: key,
                                type: 'checkbox',
                                checked: value.indexOf(key) > -1,
                                disabled: items[key].disabled || disabled,
                                readOnly: items[key].readOnly || readOnly,
                                onChange: e=> {
                                    let newValue;
                                    if (e.target.checked) {
                                        if (value.includes(key)) newValue = value;
                                        else newValue = value.concat(key);
                                    }
                                    else {
                                        if (!value.includes(key)) newValue = value;
                                        else {
                                            const index = value.indexOf(key);
                                            newValue = value.slice(0, index).concat(value.slice(index + 1));
                                        }
                                    }
                                    onChange(newValue, e);
                                }
                            }}
                        />
                        {items[key].label}
                    </label>
                </div>)
            }
        </div>
    }
}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;
CheckboxGroup.cleanValue = cleanValue.manyOfItems;

export default CheckboxGroup;