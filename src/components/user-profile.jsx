import React, { useState, useEffect } from 'react';
import CardContainer from './shared/card-container';
import { upperCaseFirst } from '../util/helper-functions';
import { fetchSettings } from '../util/api';
import { useAuth } from '../context/new-auth-context';

const getSettings = async (set, id) => {
  const setting = await fetchSettings(id);
  if (setting) {
    set(setting.setting);
  } else {
    set([]);
  }
};

const UserProfile = () => {
  const { isAuthenticated, user } = useAuth();
  const [settings, setSettings] = useState();

  useEffect(() => {
    if (user && user.id) {
      getSettings(setSettings, user.id);
    }
  }, [user]);

  if (isAuthenticated) {
    const { username, email, name, avatar } = user;
    return (
      <CardContainer>
        <h1 className='cardTitle'>User Profile</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            {settings &&
              Object.entries(settings).map((setting) => {
                console.log(setting);
                const settingName = setting[0];
                const settingValues = setting[1];
                return settingName !== 'id' ? (
                  <React.Fragment key={setting}>
                    <h3 style={{ marginBottom: 0 }}>
                      {upperCaseFirst(settingName)}
                    </h3>
                    {settingValues.length > 0 ? (
                      <ul style={{ margin: '.5rem 0 0 0', padding: 0 }}>
                        {settingName === 'themes'
                          ? settingValues.map((themeData) => {
                              return (
                                <React.Fragment key={themeData.selected}>
                                  {themeData.selected && (
                                    <p>Selected Theme: {themeData.selected}</p>
                                  )}
                                  {themeData.options && (
                                    <ul>
                                      {themeData.options.map((option) => (
                                        <li>{option}</li>
                                      ))}
                                    </ul>
                                  )}
                                </React.Fragment>
                              );
                            })
                          : settingValues.map((set) => (
                              <li style={{ marginLeft: '1rem' }} key={set}>
                                {set}
                              </li>
                            ))}
                      </ul>
                    ) : (
                      <p style={{ marginTop: '.5rem' }}>No extra {setting}</p>
                    )}
                  </React.Fragment>
                ) : null;
              })}
          </div>
          <div>
            {user.avatar && (
              <div
                style={{
                  background: `url(/avatar/${avatar})`,
                  height: 145,
                  backgroundSize: 'cover',
                  marginBottom: 16,
                }}
              />
            )}
            <p
              style={{
                marginBottom: 0,
                marginTop: '.25rem',
                fontWeight: 'bold',
              }}
            >
              {username}
            </p>
            <p style={{ marginBottom: 0, marginTop: '.25rem' }}>
              <strong>Name:</strong> {name}
            </p>
            <p style={{ marginBottom: 0, marginTop: '.25rem' }}>
              <strong>Email:</strong> {email}
            </p>
          </div>
        </div>
      </CardContainer>
    );
  }
  return (
    <CardContainer>
      <h2 style={{ margin: 0 }}>
        You need to be logged in to perform this action.
      </h2>
    </CardContainer>
  );
};

export default UserProfile;
