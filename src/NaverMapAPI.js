import React from "react";
import {RenderAfterNavermapsLoaded, NaverMap, Marker, loadNavermapsScript} from 'react-naver-maps';

const NaverMapAPI = () => {
    const navermaps = window.naver.maps;

    const markList = [
        {title:"서울?", positionX:37.554722, positionY:126.970833},
        {title:"어딘가", positionX:37.551229, positionY:126.988205},
    ];

    return (
        <RenderAfterNavermapsLoaded
      ncpClientId={'d6kmknkpeu'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
        <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '85vh' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    >
        <Marker 
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={1}
        />

    </NaverMap>
    </RenderAfterNavermapsLoaded>
    )
}

export default NaverMapAPI;