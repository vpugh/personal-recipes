import { useState } from 'react';
import { useEffect } from 'react';
import {
  getCourses,
  getCuisines,
  getMainDishes,
  updateShowFractions,
} from '../../util/api';
import { updateUserTheme } from '../../util/api';
import { useAuth } from '../../context/auth-context';

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

const useUserSettings = (user) => {
  const { updateUser } = useAuth();
  const [allCourses, setAllCourses] = useState([]);
  const [allCuisines, setAllCuisines] = useState([]);
  const [allMains, setAllMains] = useState([]);
  const [userCourses, setUserCourses] = useState([]);
  const [userCuisines, setUserCuisines] = useState();
  const [userMains, setUserMains] = useState();
  const [showFraction, setShowFraction] = useState(false);
  const [themes, setThemes] = useState([]);

  const updateTheme = async (newTheme, selectedTheme) => {
    setThemes(JSON.parse(newTheme).themes);

    const returnData = await updateUserTheme(
      user.key,
      user.user_id,
      JSON.parse(newTheme)
    );
    updateUser(returnData.update_user.returning[0]);
    window.localStorage.setItem('selectedThemeData', selectedTheme);
  };

  const updateFraction = async (showFractions) => {
    setShowFraction(showFractions);
    await updateShowFractions(user.key, user.user_id, showFractions);
  };

  useEffect(() => {
    fetchCourse(setAllCourses);
    fetchCuisine(setAllCuisines);
    fetchMains(setAllMains);
    if (user && user.settings.length > 0) {
      const settings = user.settings[0];
      setUserCourses(settings.courses);
      setUserCuisines(settings.cuisines);
      setUserMains(settings.mains);
      setThemes(settings.themes);
      setShowFraction(settings.showFractions);
    }
  }, [user, setThemes, setShowFraction]);

  return {
    allCourses,
    allCuisines,
    allMains,
    showFraction,
    themes,
    userCourses,
    userCuisines,
    userMains,
    updateFraction,
    updateTheme,
  };
};

export default useUserSettings;
