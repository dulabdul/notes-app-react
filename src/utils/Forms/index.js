import React from 'react';
import propTypes from 'prop-types';
export default function InputText(props) {
  const {
    value,
    type,
    placeholder,
    name,
    inputClassName,
    onChange,
    onBlur,
    ref,
  } = props;
  return (
    <div className='input-group'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        className={['input-control', inputClassName].join(' ')}
      />
    </div>
  );
}

InputText.defaultProps = {
  type: 'text',
  placeholder: 'Please type here...',
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
  inputClassName: propTypes.string,
};
