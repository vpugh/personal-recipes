import React from 'react';

const onChange = (e, set, index, array) => {
  const { value } = e.target;
  array[index] = value;
  set([...array]);
};

const remove = (set, index, array) => {
  array.splice(index, 1);
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
    <div
      style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
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
      <p
        onClick={() => remove(setFunction, index, array)}
        style={{ position: 'absolute', right: 24, top: 10, margin: 0 }}
      >
        Remove
      </p>
    </div>
  );
};

export default TextareaNested;
