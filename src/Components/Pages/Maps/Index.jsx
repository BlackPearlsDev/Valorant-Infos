import { useState, useEffect } from 'react';
import HeadSection from '../../UI/HeadSection/Index';
import BackTop from '../../UI/BackTop/Index';
import api from '../../../API/index';
// import { Link } from 'react-router-dom';

function Maps() {

    const [maps, setMaps] = useState([]);

    useEffect(() => {
        api.get('/maps', {
                params: {
                    language: 'fr-FR'
                }
            })
            .then(res => {
                setMaps(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <main>
            <HeadSection title="Les maps" para="Évoluez sur un terrain différent à chaque fois demande une connaissance de celui-ci." btn="Parcourir" anchor="#maps-details" />
            
            <section className='maps-details' id="maps-details">
                <article>
                    <h2>MAPS</h2>
                    <div className='div-line'></div>
                    <p>Les cartes sont toutes différentes et les stratégies diffèrent.</p>
                </article>

                <div className='maps-pos'>
                    {maps.map((map, index) => (
                        <div className='map-card' key={index}>
                            {/* <Link className='maps-btn' to={`${map.uuid}`}> */}
                                <img src={map.splash} alt={map.displayName} />
                            {/* </Link> */}
                            <h2>{map.displayName}</h2>
                            <p>{map.coordinates}</p>
                        </div>
                    ))}
                </div>
            </section>

            <BackTop />
        </main>
    )
}

export default Maps;