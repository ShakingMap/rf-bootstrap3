import React from 'react';
import nid from 'nid';

const propTypes = {
    label: React.PropTypes.string,
    validationState: React.PropTypes.any,
    validationMessage: React.PropTypes.string,
    value: React.PropTypes.object, // {path, file, files}
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    disabled: React.PropTypes.bool

    // other props will be passed down to inner input directly
};

const defaultProps = {
    onChange(){}
};

class Text extends React.Component {
    componentWillMount() {
        this.id = nid();
    }

    render() {
        let {label, validationState, validationMessage, value, onChange, readOnly, disabled, ...otherProps} = this.props;
        if (value === undefined) value = {path: undefined};
        if (value === null) value = {path: ''};

        return <div className={"form-group"+(validationState ? (' has-'+validationState):'')}>
            {label ? <label className="control-label" htmlFor={this.getId()}>{label}</label> : null}
            <input
                id={this.getId()}
                type="file"
                value={value.path}
                onChange={e=>onChange({path:e.target.value, file:e.target.files[0], files: e.target.files}, e)}
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

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;