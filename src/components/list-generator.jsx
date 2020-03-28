import React from 'react';

const replaceFractions = text => {
  let newText = text;
  if (newText.includes('1/2')) {
    const half = newText.replace(/1\/2/g, `\u00BD`);
    newText = half;
  }
  if (newText.includes('1/4')) {
    const quarter = newText.replace(/1\/4/g, '\u00BC');
    newText = quarter;
  }
  if (newText.includes('1/3')) {
    const third = newText.replace(/1\/3/g, `\u2153`);
    newText = third;
  }
  if (newText.includes('3/4')) {
    const threeFourths = newText.replace(/3\/4/g, `\u00BE`);
    newText = threeFourths;
  }
  if (newText.includes('1/8')) {
    const oneEigth = newText.replace(/1\/8/g, `\u215B`);
    newText = oneEigth;
  }
  return newText;
};

const ListGenerator = (arr, header, columns = 1) => {
  const lengthCheck = arr.length > 0;
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            {newList.map(listArr => (
              <ul key={listArr} style={{ margin: 0, padding: 0 }}>
                {listArr.map(a => (
                  <li
                    style={{ marginLeft: '1rem', paddingBottom: '.75rem' }}
                    key={a}
                  >
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
        <ul style={{ margin: 0, padding: 0 }}>
          {arr.map(a => (
            <li style={{ marginLeft: '1rem', paddingBottom: '.75rem' }} key={a}>
              {replaceFractions(a)}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default ListGenerator;
