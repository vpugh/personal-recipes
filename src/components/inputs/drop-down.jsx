import React from 'react';

const onChange = (e, set) => {
  const { value } = e.target;
  set(value);
};

const DropDown = ({
  labelTitle,
  placeholder,
  required = false,
  value = '',
  setFunction,
  optionArr
}) => {
  const id = labelTitle.toLowerCase();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
      <label htmlFor={id} style={{ color: '#F65B5B' }}>
        {labelTitle}
        {required && '*'}
      </label>
      <select
        value={value}
        name={id}
        id={id}
        onChange={e => onChange(e, setFunction)}
        style={{
          marginTop: 10,
          background: '#F7F7F7',
          border: '1px solid #E8E8E8',
          padding: '9px 14px',
          fontSize: 16,
          height: 38,
          color: value ? '#000' : '#757575'
        }}
      >
        <option defaultValue value=''>
          {placeholder}
        </option>
        {optionArr &&
          optionArr.map(dl => (
            <option key={dl} value={dl}>
              {dl}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DropDown;
