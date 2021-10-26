import React from 'react';
import NaverMapAPI from './NaverMapAPI';

function App() {
  const [text, setText] = React.useState("지금 내 위치!");
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  const success = (x) => {
    const position = x.coords;
    const latitude = position.latitude;
    const longitude = position.longitude;
    // setText(position)
    console.log("위도 :::",latitude)
    console.log("경도 :::",longitude)
  }

  const error = (x) => {
    setText(x.code+":::"+x.message);
  }

  const MyPosition = () => {
    if('geolocation' in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition(success, error, options);

    } else {
      /* 위치정보 사용 불가능 */
      setText("확인할 수 없다 ㅠㅠ")
      
    }
  }

  return (
    <React.Fragment>
      <button onClick={MyPosition}>지금 나의 위치는?</button>
      {/* <NaverMapAPI /> */}
      {text}
      </React.Fragment>
  );
}

export default App;