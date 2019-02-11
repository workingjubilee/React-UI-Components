import React from 'react';
import './Header.css';

// - Create a <HeaderTitle /> component that displays the Lambda School header text, @LambdaSchool handle and timestamp.
function HeaderTitle() {
  return (
    <div className="headerTitle"><h1>LambdaSchool</h1> <h2>@Lambda School * 11 feb</h2></div>
  );
}
// 1s = 1000 ms
// 1min = 60s = 60 000ms
// 1hr = 60min = 3600s = 3 600 000ms (3.6 kiloseconds)
// 1d = 24hr = 1440min = 86400s = 86 400 000 (86 kiloseconds!)
export default HeaderTitle;
