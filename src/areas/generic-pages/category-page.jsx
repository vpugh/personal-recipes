import React from 'react';
import CardContainer from '../../components/page-container';
import { replacePunctuation } from '../../util/helper-functions';
import { useAuth } from '../../context/auth-context';

const CategoryPage = (props) => {
  const { category } = props.match.params;
  const { user } = useAuth();

  const createCategoryList = (arr, category) => {
    const categoryList = [];
    for (let i in arr) {
      const item = arr[i];
      if (category === 'main-dish') {
        categoryList.push(item['main_dish']);
      }
      if (category === 'tags') {
        categoryList.push(item['tags']);
      }
      if (item[category]) {
        categoryList.push(item[category]);
      }
    }
    const set = [...new Set(categoryList.flat())];
    return set.filter((x) => x);
  };

  const contentList = (arr, option, name) => {
    if (name === 'main-dish') {
      return arr.filter((x) => x['main_dish'].includes(option) === true);
    } else if (name === 'tags') {
      return arr.filter((x) => x['tags'].includes(option) === true);
    } else {
      return arr.filter((x) => x[name].includes(option) === true);
    }
  };

  const categories = user && createCategoryList(user.recipes, category);

  return (
    <CardContainer>
      <h1 className='pageTitle'>All {replacePunctuation(category)}</h1>
      {user &&
        categories.map((cat) => (
          <React.Fragment key={cat}>
            <div style={{ borderBottom: '1px solid #ddd', marginBottom: 20 }}>
              <h3 style={{ marginBottom: '.75rem' }}>{cat}</h3>
            </div>
            {contentList(user.recipes, cat, category).map((content) => (
              <div key={content.id}>
                <p style={{ marginTop: '.5rem', marginBottom: 0 }}>
                  {content.title}
                </p>
              </div>
            ))}
          </React.Fragment>
        ))}
    </CardContainer>
  );
};

export default CategoryPage;
