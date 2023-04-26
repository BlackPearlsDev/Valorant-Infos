// UNDER CONSTRUCTION

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../API/index';

function SelectedMap() {

    const [selectedMap, setSelectedMap] = useState(null);
    const map = useParams();
    // eslint-disable-next-line no-unused-vars
    const [callouts, setCallouts] = useState([]);

    useEffect(() => {
        api.get(`/maps/${map.map}`, {
                params: {
                    language: 'fr-FR'
                }
            })
            .then(res => {
                setSelectedMap(res.data.data);
                setCallouts(res.data.data.callouts);
            })
            .catch(err => {
                console.log(err);
            })
    }, [map]);

    // eslint-disable-next-line no-unused-vars
    const getPosition = (location) => {
        const { x, y } = location;
        const { xMultiplier, yMultiplier, xScalarToAdd, yScalarToAdd } = selectedMap;
        const x_img = x * yMultiplier + yScalarToAdd;
        const y_img = y * xMultiplier + xScalarToAdd;
        console.log('x_img:', x_img);
        console.log('y_img:', y_img);
        return { left: x_img, top: y_img };
    };

    return (
        <main>
            <section className='selected-map'>
                <div className="map-container">
                    <img src={selectedMap?.displayIcon} alt={selectedMap?.displayName} />
                    {/* {callouts.map((callout, index) => (
                    <div key={index} className="callout" style={getPosition(callout.location)}>
                        {callout.regionName}
                        {callout.superRegionName}
                    </div>
                    ))} */}
                </div>
            </section>
        </main>
    )
}

export default SelectedMap;