import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl, {Map, Popup} from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbnlhdm9yaW4iLCJhIjoiY2s2MG9uN28xMDlnejNqbG9na25qdG82dCJ9.8zu4rjJ4HupNnNmKuIz7Yg';


class Application extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         lng: 5,
    //         lat: 34,
    //         zoom: 1,
    //         pitch: 0,
    //         rotation: 0,
    //     }
    // }

    componentDidMount() {
        const map = new Map({
            container: 'map', //this.mapContainer,
            //the style created for Choropleth map on Styles page in mapbox account
            style: 'mapbox://styles/ivanyavorin/ck61z8jpt0k0u1ith3tkwqvwu', //'mapbox://styles/ivanyavorin/ck60qwkwl10hv1jqpzpfzvvtf', //'mapbox://styles/mapbox/streets-v11',
            center:  [-87.661557, 41.893748],//[this.state.lng, this.state.lat],
            zoom: 10.7//this.state.zoom,
            // pitch: this.state.pitch,
            // rotation: this.state.rotation,
        });

        map.on('click', (event) => {
            let features = map.queryRenderedFeatures(event.point, {
                layers: ['chicago-parks']
            });

            if (!features.length) {
                return;
            }

            let feature = features[0];
            let title = feature.properties.title;
            let description = feature.properties.description;

            let popup = new Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h3>' + title + '</h3><p>' + description + '</p>');

             popup.addTo(map);

        })

    }

    render() {
        return (
            <div>
                {

                }
                
            </div>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('map'));  //app')); 

//<div ref={el => this.mapContainer = el} className='mapContainer' /> 