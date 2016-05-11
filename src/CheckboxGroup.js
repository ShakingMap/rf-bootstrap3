import React from 'react';

const propTypes = {
    label: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    value: React.PropTypes.arrayOf(React.PropTypes.string),
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool,

    items: React.PropTypes.object, // key:{label, disabled, readOnly}
    inline: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class CheckboxGroup extends React.Component {
    render() {
        let {label, validationState, validationMessage, value, onChange, readOnly, disabled,
            items, inline,
            ...otherProps} = this.props;
        if (value === null) value = [];
        if (!items) items = {};

        return <div className={"form-group"+(validationState ? (' has-'+validationState):'')}>
            {label ? <label className="control-label" htmlFor={this.getId()}>{label}</label> : null}
            {inline ? <br/> : null}
            {
                Object.keys(items).map((key, index)=> <div key={key} className={inline? 'checkbox-inline':'checkbox'}>
                    <label>
                        <input
                            {...{
                                ref: key,
                                type: 'checkbox',
                                checked: value === undefined ? undefined : value.indexOf(key) > -1,
                                disabled: items[key].disabled || disabled,
                                readOnly: items[key].readOnly || readOnly,
                                onChange: e=> {
                                    if (value === undefined) onChange(Object.keys(items).map((key)=>(this.refs[key] && this.refs[key].checked) ? key : null).filter(key=>key !== null), e)
                                    else onChange(value.concat(key).filter(v=> v !== key || e.target.checked), e)
                                }
                            }}
                        />
                        {items[key].label}
                    </label>
                </div>)
            }
            {validationMessage ? <span className="help-block">{validationMessage}</span> : null}
        </div>
    }

    getId() {
        return this.props.id || this.id;
    }
}

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;