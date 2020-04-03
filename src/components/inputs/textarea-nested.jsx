import React from 'react';

const onChange = (e, set, index, array) => {
  const { value } = e.target;
  array[index] = value;
  set([...array]);
};

const TextareaNested = ({
  inputType,
  placeholder,
  required = false,
  value = '',
  index,
  array,
  setFunction
}) => {
  return (
    <textarea
      style={{
        marginBottom: 10,
        background: '#F7F7F7',
        border: '1px solid #E8E8E8',
        padding: '9px 14px',
        fontSize: 16
      }}
      id={inputType}
      name={inputType}
      onChange={e => onChange(e, setFunction, index, array)}
      type='text'
      rows='1'
      value={value}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default TextareaNested;
