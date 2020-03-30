import React from 'react';
import { replaceFractions, upperCaseFirst } from '../util/helper-functions';
import useStyles from '../styles/list-generator-styles';

const ListGenerator = ({ arr, header, columns = 1 }) => {
  const classes = useStyles();
  const lengthCheck = arr.length > 0;
  if (lengthCheck && typeof arr[0].separate !== 'undefined') {
    return (
      <div>
        <h3>{header}</h3>
        {arr.map(a => {
          if (Object.keys(a).toString() !== 'separate') {
            return (
              <React.Fragment key={Object.keys(a).toString()}>
                <h4 className={classes.listSubtitle}>
                  {upperCaseFirst(Object.keys(a).toString())}
                </h4>
                <ul className={classes.listUl}>
                  {Object.values(a)[0].map(list => (
                    <li key={list} className={classes.listLi}>
                      {replaceFractions(list)}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
    );
  }
  if (arr.length > 5 && columns > 1) {
    let newList = [];
    const limit = arr.length / 2;
    for (var i = 0, len = arr.length; i < len; i += limit) {
      newList.push(arr.slice(i));
    }
    newList[0].splice(limit, arr.length);
    return (
      lengthCheck && (
        <div>
          <h3>{header}:</h3>
          <div className={classes.listFlex}>
            {newList.map(listArr => (
              <ul key={listArr} className={classes.listUlTwoCol}>
                {listArr.map(a => (
                  <li className={classes.listLi} key={a}>
                    {replaceFractions(a)}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )
    );
  }
  return (
    lengthCheck && (
      <div>
        <h3>{header}:</h3>
        <ul className={classes.listUl}>
          {arr.map(a => (
            <li className={classes.listLi} key={a}>
              {replaceFractions(a)}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ListGenerator;
