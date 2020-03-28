import React from 'react';

const replaceFractions = text => {
  let newText = text;
  if (newText.includes('1/2')) {
    const half = newText.replace(/1\/2/g, `\u00BD`);
    newText = half;
  }
  if (newText.includes('1 /2')) {
    const half = newText.replace(/1\s\/2/g, `\u00BD`);
    newText = half;
  }
  if (newText.includes('1/4')) {
    const quarter = newText.replace(/1\/4/g, '\u00BC');
    newText = quarter;
  }
  if (newText.includes('1 /4')) {
    const quarter = newText.replace(/1\s\/4/g, '\u00BC');
    newText = quarter;
  }
  if (newText.includes('1/3')) {
    const third = newText.replace(/1\/3/g, `\u2153`);
    newText = third;
  }
  if (newText.includes('1 /3')) {
    const third = newText.replace(/1\s\/3/g, `\u2153`);
    newText = third;
  }
  if (newText.includes('3/4')) {
    const threeFourths = newText.replace(/3\/4/g, `\u00BE`);
    newText = threeFourths;
  }
  if (newText.includes('3 /4')) {
    const threeFourths = newText.replace(/3\s\/4/g, `\u00BE`);
    newText = threeFourths;
  }
  if (newText.includes('1/8')) {
    const oneEigth = newText.replace(/1\/8/g, `\u215B`);
    newText = oneEigth;
  }
  if (newText.includes('1 /8')) {
    const oneEigth = newText.replace(/1\s\/8/g, `\u215B`);
    newText = oneEigth;
  }
  return newText;
};

const upperCaseFirst = str => {
  return str[0].toUpperCase() + str.slice(1);
};

const ListGenerator = (arr, header, classes, columns = 1) => {
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
