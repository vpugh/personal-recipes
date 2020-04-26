import React, { useState, useEffect } from 'react';
import CardContainer from './shared/card-container';
import { upperCaseFirst } from '../util/helper-functions';
import { fetchSettings } from '../util/api';
import { useAuth } from '../context/new-auth-context';

const getSettings = async (set, id) => {
  const setting = await fetchSettings(id);
  console.log(setting);
  if (setting) {
    set(setting.setting.options);
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
              settings.map((setting) => {
                const settingName = Object.keys(setting);
                const settingValues = Object.values(setting)[0];
                return (
                  <React.Fragment key={settingName}>
                    <h3 style={{ marginBottom: 0 }}>
                      {upperCaseFirst(settingName)}
                    </h3>
                    {settingValues.length > 0 && (
                      <ul style={{ margin: '.5rem 0 0 0', padding: 0 }}>
                        {settingValues.map((set) => (
                          <li style={{ marginLeft: '1rem' }} key={set}>
                            {set}
                          </li>
                        ))}
                      </ul>
                    )}
                    {settingValues.length === 0 && (
                      <p style={{ marginTop: '.5rem' }}>
                        No extra {settingName}
                      </p>
                    )}
                  </React.Fragment>
                );
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
