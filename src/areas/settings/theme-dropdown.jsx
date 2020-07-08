import React from 'react';
import { useState } from 'react';

const ThemeDropDown = (props) => {
  const { data } = props;
  const [selectedValue, setSelectedValue] = useState(data[0].selected);

  const selectTheme = (theme) => {
    setSelectedValue(theme);
    // handleSettingUpdates(value);
    window.localStorage.setItem('selectedThemeData', theme);
  };

  return (
    <div>
      <div style={{ display: 'flex', marginTop: 16 }}>
        {data[1].options.map((theme) => {
          return (
            <div
              key={theme.type}
              style={{
                background: theme.color,
                width: 40,
                height: 40,
                margin: '0 8px',
                borderRadius: '50%',
                transistion: '300ms ease-in-out',
                border:
                  selectedValue === theme.type
                    ? '4px solid #000'
                    : `4px solid ${theme.color}`,
              }}
              onClick={() => {
                selectTheme(theme.type);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThemeDropDown;
