import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// 將 CSS 文件單獨引入
import 'mapbox-gl/dist/mapbox-gl.css';

<head>
    <meta charset='utf-8' />
    <title>map</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charset="UTF-8"/>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.0/redux.min.js"
            integrity="sha512-1/8Tj23BRrWnKZXeBruk6wTnsMJbi/lJsk9bsRgVwb6j5q39n0A00gFjbCTaDo5l5XrPVv4DZXftrJExhRF/Ug=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
            crossorigin="anonymous"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src='https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css' rel='stylesheet' />

    <style>
        body {<>
            margin: 0;
            padding: 0;
            </>}

        #map {<>
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            </>}
    </style>

</head>

function Map() {
    useEffect(() => {
        // 在 useEffect 中初始化地圖
        mapboxgl.accessToken = 'pk.eyJ1IjoieWFjaGk1NTY2IiwiYSI6ImNsdnFubXZ1eTA3N24ybG51MWw5NWN0cjkifQ.C60924T4jbBzR8L3EC71fg';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/yachi5566/clvqnwtxt00i701qubm0305la',
            center: [121.458944, 25.007784],
            zoom: 17
        });

        // 點擊彈出視窗
        map.on('click', (event) => {
            const features = map.queryRenderedFeatures(event.point, { layers: ['cafes0505'] });
            if (!features.length) {
                return;
            }
            const feature = features[0];

            const popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML(
                    `<h3>${feature.properties.title}</h3><p><img src="./img/icon/mapPlace.svg"/> ${feature.properties.description}</p>`
                )
                .addTo(map);
        });

        // hover時鼠標變成手型
        map.on('mouseenter', ['cafes0505'], () => {
            map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', ['cafes0505'], () => {
            map.getCanvas().style.cursor = '';
        });

        // 在組件 unmount 時清除地圖
        return () => map.remove();
    }, []);

    // 返回地圖容器
    return <div id="map" style={{ width: '100%', height: '70vh' }}></div>;
}

export default Map;
