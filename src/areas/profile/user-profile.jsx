import React from 'react';
import { useAuth } from '../../context/auth-context';
import PageContainer from '../../components/page-container';
import { capitalize } from '../../util/helper-functions';
import ThemeDropDown from './theme-dropdown';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  settingsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  settingHeader: {
    marginBottom: 0,
  },
  list: {
    margin: '.5rem 0 0 0',
    padding: 0,
  },
  listBullet: {
    marginLeft: '1.2rem',
  },
}));

const UserProfile = () => {
  const { user } = useAuth();
  const classes = useStyles();

  const displayOptions = [
    'Themes',
    'Specialties',
    'Mains',
    'Cuisines',
    'Courses',
  ];

  if (user) {
    const { username, email, name, avatar } = user;
    const settings =
      (user && user.setting.length > 0 && Object.entries(user.setting[0])) ||
      [];
    const sortedSettings = settings.filter((x) => {
      return displayOptions.includes(capitalize(x[0])) === true;
    });

    return (
      <PageContainer>
        <>
          <h1 className='pageTitle'>User Profile</h1>
          <div className={classes.settingsContainer}>
            <div>
              {sortedSettings.map((setting) => {
                const name = setting[0];
                const value = setting[1];
                if (name === 'themes') {
                  return (
                    <div key={name}>
                      <h3 className={classes.settingHeader}>
                        {capitalize(name)}
                      </h3>
                      <ThemeDropDown data={value} />
                    </div>
                  );
                } else {
                  return (
                    <div key={name}>
                      <h3 className={classes.settingHeader}>
                        {capitalize(name)}
                      </h3>
                      {value.length > 0 ? (
                        <ul className={classes.list}>
                          {value.map((v) => (
                            <li key={v} className={classes.listBullet}>
                              {v}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No Selections</p>
                      )}
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <div
                style={{
                  background: avatar ? `url(/avatar/${avatar})` : '#ddd',
                  height: 145,
                  backgroundSize: 'cover',
                  marginBottom: 16,
                }}
              />
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
        </>
      </PageContainer>
    );
  }
  return null;
};

export default UserProfile;
