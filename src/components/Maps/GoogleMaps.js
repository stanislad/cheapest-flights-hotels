import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    height: '400px'
};

const MyComponent = ({coords}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAn_g3rpFp6rrqRc4Cbdvd9iRJ5AtbaJ-o"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(coords);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={coords}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker
                position={coords}
            />
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)