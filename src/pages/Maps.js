import React from 'react';
import { Map } from 'react-kakao-maps-sdk';


const Maps =()=>{

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
        console.log(x.code+":::"+x.message);
      }
    
      const MyPosition = () => {
        if('geolocation' in navigator) {
          /* 위치정보 사용 가능 */
          navigator.geolocation.getCurrentPosition(success, error, options);
    
        } else {
          /* 위치정보 사용 불가능 */
          console.log("확인할 수 없다 ㅠㅠ")
          
        }
      }
    return (
        <React.Fragment>
            <button onClick={MyPosition}>내 위치 콘솔로 가져오기</button>
                  <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
    </Map>
        </React.Fragment>
    )
}

export default Maps;