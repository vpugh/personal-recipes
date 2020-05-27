import React from 'react';
import { upperCaseFirst } from '../../util/helper-functions';
import { useState } from 'react';

const ThemeDropDown = (props) => {
  const { data } = props;
  const [selectedValue, setSelectedValue] = useState(data[0].selected);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    // handleSettingUpdates(value);
    window.localStorage.setItem('selectedThemeData', value);
  };

  return (
    <div>
      <p style={{ marginBottom: '.5rem' }}>
        <strong>Selected Theme:</strong> {upperCaseFirst(data[0].selected)}
      </p>
      <p style={{ marginBottom: '.25rem', fontSize: '.9rem' }}>
        Choose Another Theme:
      </p>
      <select
        value={selectedValue}
        name='selectedTheme'
        id='selectedTheme'
        onChange={handleOnChange}
        defaultValue={data.selected}
      >
        {data[1].options.map((option) => (
          <option key={option} value={option}>
            {upperCaseFirst(option)} Theme
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeDropDown;
