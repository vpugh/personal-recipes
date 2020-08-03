import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../context/auth-context';
import PageContainer from '../../components/page-container';
import { capitalize } from '../../util/helper-functions';
import ThemeDropDown from './theme-dropdown';
import { makeStyles } from '@material-ui/core/styles';
import OptionSection from './option-section';
import {
  getCourses,
  getCuisines,
  getMainDishes,
  updateUserName,
} from '../../util/api';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { FormTextInput } from '../../components/inputs/form/form-text-input';
import { InputAdornment } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

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

const fetchCourse = async (set) => {
  const courses = await getCourses();
  set(courses);
};

const fetchCuisine = async (set) => {
  const cuisines = await getCuisines();
  set(cuisines);
};

const fetchMains = async (set) => {
  const mains = await getMainDishes();
  set(mains);
};

const Settings = () => {
  const { user, isLoading } = useAuth();
  const classes = useStyles();
  const [settingsUser, setSettingsUser] = useState();
  const [courses, setCourses] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [mains, setMains] = useState([]);
  const [editName, setEditName] = useState(false);

  useEffect(() => {
    fetchCourse(setCourses);
    fetchCuisine(setCuisines);
    fetchMains(setMains);
    if (user) {
      setSettingsUser(user);
    }
  }, [user]);

  const displayOptions = ['Themes', 'Mains', 'Cuisines', 'Courses'];

  const getArr = useCallback(
    (name) => {
      switch (name) {
        case 'courses':
          return courses;
        case 'cuisines':
          return cuisines;
        case 'mains':
          return mains;
        default:
          break;
      }
    },
    [courses, cuisines, mains]
  );

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
    const { username, email, name, picture } = settingsUser;
    const settings =
      (settingsUser &&
        settingsUser.settings.length > 0 &&
        Object.entries(settingsUser.settings[0])) ||
      [];
    const sortedSettings = settings.filter((x) => {
      return displayOptions.includes(capitalize(x[0])) === true;
    });

    return (
      <PageContainer>
        <>
          <h1 className='pageTitle'>Settings</h1>
          <div className={classes.settingsContainer}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    background: picture ? `url(${picture})` : '#ddd',
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
              {sortedSettings.map((setting) => {
                const name = setting[0];
                const value = setting[1];
                if (name === 'themes') {
                  return (
                    <div key={name}>
                      <h3 className={classes.settingHeader}>
                        {capitalize(name)}
                      </h3>
                      <ThemeDropDown data={value} userKey={settingsUser.key} />
                    </div>
                  );
                } else {
                  return (
                    <OptionSection
                      arr={getArr(name)}
                      name={name}
                      value={value}
                      key={name}
                    />
                  );
                }
              })}
            </div>
          </div>
        </>
      </PageContainer>
    );
  }
  return null;
};

export default Settings;
