import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const { name, onChange } = this.props;
        if (onChange) {
            onChange(name, e.target.value);
        }
    }

    componentDidMount() {
        if(this.props.autoFocus){
            this.refs.focus();
        }
    }

    componentDidUpdate() {
        if(this.props.autoFocus){
            this.refs.focus();
        }
    }
    setRef(ref){
        this.ref = ref;
    }

    render() {
        const { errorMessage, label, name, value, type, onFocus } = this.props;
        return (
            <div className="input-field">
                <input
                id={`input_${name}`}
                ref={this.setRef}
                onChange={this.handleChange}
                onFocus={onFocus}
                value={value}
                type={type}
                />
                <label htmlFor={`input_${name}`}>
                    {label}
                </label>
                {errorMessage && <span className="helper-text">{errorMessage}</span>}
            
            </div>
        );
    }
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'price']),
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    autoFocus: PropTypes.bool,
};

Input.defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    autoFocus: false,
    type: 'text',
};

export default Input;