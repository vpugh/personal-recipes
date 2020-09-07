import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth-context';
import PageContainer from '../../components/page-container';
import ThemeDropDown from './theme-dropdown';
import { makeStyles } from '@material-ui/core/styles';
import OptionSection from './option-section';
import { updateUserName } from '../../util/api';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { FormTextInput } from '../../components/inputs/form/form-text-input';
import {
  InputAdornment,
  Switch,
  FormControlLabel,
  useTheme,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import useUserSettings from '../../util/hooks/useUserSettings';
import UserAvatar from '../../components/avatar';

const useStyles = makeStyles((theme) => ({
  settingsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  settingHeader: {
    marginBottom: 0,
  },
}));

const Settings = () => {
  const { user, isLoading } = useAuth();
  const classes = useStyles();
  const [settingsUser, setSettingsUser] = useState();
  const [editName, setEditName] = useState(false);
  const theme = useTheme();
  const {
    allCourses,
    allCuisines,
    allMains,
    showFraction,
    themes,
    userCourses,
    userCuisines,
    userMains,
    updateTheme,
    updateFraction,
  } = useUserSettings(user);

  useEffect(() => {
    if (user) {
      setSettingsUser(user);
    }
  }, [user]);

  const handleChange = (event, set) => {
    const { value, name } = event.target;
    const newName = { ...settingsUser };
    newName[name] = value;
    set(newName);
  };

  const updateName = async () => {
    await updateUserName(settingsUser.user_id, {
      name: settingsUser.name,
    });
  };

  const resetName = () => {
    const settingsCopy = { ...settingsUser };
    const oldName = user.name;
    settingsCopy.name = oldName;
    setSettingsUser(settingsCopy);
  };

  if (settingsUser && !isLoading) {
    const { username, email, name } = settingsUser;

    return (
      <PageContainer>
        <>
          <h1 className='pageTitle'>Settings</h1>
          <div className={classes.settingsContainer}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    backgroundColor: theme.palette.primary.pale,
                    backgroundImage: `url("${UserAvatar(email)}")`,
                    height: 145,
                    backgroundSize: 'cover',
                    marginBottom: 16,
                    width: 145,
                    borderRadius: '50%',
                    marginRight: 36,
                  }}
                />
                <div>
                  <h3 style={{ marginTop: 0 }}>User Profile</h3>
                  <p
                    style={{
                      marginBottom: 0,
                      marginTop: '.25rem',
                      fontWeight: 'bold',
                      fontSize: '1.4rem',
                    }}
                  >
                    {username}
                  </p>
                  {editName ? (
                    <FormTextInput
                      value={settingsUser.name}
                      name='name'
                      onChange={(e) => handleChange(e, setSettingsUser)}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={() => {
                              updateName();
                              setEditName(false);
                            }}
                            edge='end'
                          >
                            <CheckIcon />
                          </IconButton>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={() => {
                              resetName();
                              setEditName(false);
                            }}
                            edge='end'
                          >
                            <CloseIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  ) : (
                    <p
                      style={{
                        marginBottom: 0,
                        marginTop: '.25rem',
                      }}
                    >
                      <strong>Name:</strong>{' '}
                      <span
                        style={{ display: 'inline-flex', alignItems: 'center' }}
                      >
                        {name}{' '}
                        <IconButton
                          aria-label='Edit'
                          onClick={() => setEditName(true)}
                          style={{ marginLeft: 8 }}
                        >
                          <EditIcon fontSize='small' />
                        </IconButton>
                      </span>
                    </p>
                  )}
                  <p style={{ marginBottom: 0, marginTop: '.25rem' }}>
                    <strong>Email:</strong> {email}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <OptionSection
                arr={allMains}
                name='Main Dishes'
                value={userMains}
                key='maindish'
              />
              <OptionSection
                arr={allCuisines}
                name='Cuisines'
                value={userCuisines}
                key='cuisines'
              />
              <OptionSection
                arr={allCourses}
                name='Courses'
                value={userCourses}
                key='courses'
              />
              {themes && (
                <div>
                  <h3 className={classes.settingHeader}>Themes</h3>
                  <ThemeDropDown
                    data={themes}
                    userKey={settingsUser.key}
                    updateTheme={updateTheme}
                  />
                </div>
              )}
              <div>
                <h3 className={classes.settingHeader}>Show Fractions</h3>
                <FormControlLabel
                  labelPlacement='start'
                  control={
                    <Switch
                      checked={showFraction}
                      onChange={() => updateFraction(!showFraction)}
                      color='primary'
                    />
                  }
                  label={showFraction ? 'On' : 'Off'}
                />
              </div>
            </div>
          </div>
        </>
      </PageContainer>
    );
  }
  return null;
};

export default Settings;
