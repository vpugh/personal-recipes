import React from 'react';

const onChange = (e, set) => {
  const { value } = e.target;
  set(value);
};

const TextareaInput = ({
  labelTitle,
  placeholder,
  required = false,
  value = '',
  setFunction
}) => {
  const id = labelTitle.toLowerCase();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
      <label htmlFor={id} style={{ color: '#F65B5B' }}>
        {labelTitle}
        {required && '*'}
      </label>
      <textarea
        style={{
          marginTop: 10,
          background: '#F7F7F7',
          border: '1px solid #E8E8E8',
          padding: '9px 14px',
          fontSize: 16
        }}
        id={id}
        name={id}
        onChange={e => onChange(e, setFunction)}
        type='text'
        value={value}
        rows='2'
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextareaInput;
