import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../context/auth-context';
import PageContainer from '../../components/page-container';
import { capitalize } from '../../util/helper-functions';
import ThemeDropDown from './theme-dropdown';
import { makeStyles } from '@material-ui/core/styles';
import OptionSection from './option-section';
import { getCourses, getCuisines, getMainDishes } from '../../util/api';

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
  const { user } = useAuth();
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [mains, setMains] = useState([]);

  useEffect(() => {
    fetchCourse(setCourses);
    fetchCuisine(setCuisines);
    fetchMains(setMains);
  }, []);

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
          <h1 className='pageTitle'>Settings</h1>
          <div className={classes.settingsContainer}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    background: avatar ? `url(/avatar/${avatar})` : '#ddd',
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
                  <p style={{ marginBottom: 0, marginTop: '.25rem' }}>
                    <strong>Name:</strong> {name}
                  </p>
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
                      <ThemeDropDown data={value} />
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
