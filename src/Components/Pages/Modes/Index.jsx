import { useState, useEffect } from 'react';
import HeadSection from '../../UI/HeadSection/Index';
import BackTop from '../../UI/BackTop/Index';
import api from '../../../API/index';

function Modes() {

    const [modes, setModes] = useState([]);

    useEffect(() => {
        api.get('/gamemodes', {
                params: {
                    language: 'fr-FR'
                }
            })
            .then(res => {
                setModes(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <main>
            <HeadSection title="Les modes" para="Les modes de jeux établissent les règles dans Valorant." btn="Parcourir" anchor="#modes-details" />


            <section className='modes-details' id="modes-details">
                <article>
                    <h2>MODES</h2>
                    <div className='div-line'></div>
                    <p>Choisissez bien un mode qui vous correspond avant de lancer la partie.</p>
                </article>

                <div className='modes-pos'>
                    {modes.filter((mode) => mode.displayName !== "Intégration" && mode.displayName !== "ENTRAÎNEMENT").map((mode, index) => (
                        <div className='modes-card' key={index}>
                            {mode.displayIcon && (
                                <img src={mode.displayIcon} alt={mode.displayName} />
                            )}
                            <h3>{mode.displayName}</h3>
                            <p>Durée moyenne: {mode.duration}</p>
                        </div>
                    ))}
                </div>
            </section>

            <BackTop />
        </main>
    )
}

export default Modes;