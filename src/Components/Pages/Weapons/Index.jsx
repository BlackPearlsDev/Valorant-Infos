import { useState, useEffect } from 'react';
import HeadSection from '../../UI/HeadSection/Index';
import BackTop from '../../UI/BackTop/Index';
import api from '../../../API/index';
import Modal from '../../UI/Modal/Index';

function Weapons() {

    const [weapons, setWeapons] = useState([]);
    const [selectedWeapon, setSelectedWeapon] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        api.get('/weapons', {
                params: {
                    language: 'fr-FR'
                }
            })
            .then(res => {
                setWeapons(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    // console.log('weapons:', weapons);

    const handleClickWeapons = (e, weapon) => {
        e.preventDefault();
        setSelectedWeapon(weapon);
        setShowModal(true);
    }

    // console.log('selectedWeapon:', selectedWeapon);

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <main>
            <HeadSection title="Les armes" para="Les armes sont les outils indispensables pour gagner une partie." btn="Parcourir" anchor="#weapons-details" />

            <section className='weapons-details' id="weapons-details">
                <article>
                    <h2>ARMES</h2>
                    <div className='div-line'></div>
                    <p>Une victoire ne se fait pas à mains nues, équipez-vous.</p>
                    <p className='txt-error'>⚠️ PAGE EN COURS DE DEV & DE DESIGN ⚠️</p>
                </article>

                <div className='weapons-pos'>
                    {weapons.map((weapon, index) => (
                        <div className='weapon-card' key={index}>
                            <button>
                                <img src={weapon.killStreamIcon} alt={weapon.displayName} onClick={(e) => handleClickWeapons(e, weapon)}/>
                            </button>
                        </div>
                    ))}
                </div>

                {showModal && (
                    <Modal onClose={handleCloseModal}>
                        <div className='modal-weapon'>
                            <div>
                                <div className='weapon-infos'>
                                    <h2>{selectedWeapon.displayName}</h2>
                                    <p>{selectedWeapon.shopData?.category}</p>
                                </div>
                                <div className='weapon-img-price'>
                                    <img src={selectedWeapon.displayIcon} alt={selectedWeapon.displayName} />
                                    <p>{selectedWeapon.shopData?.cost}■</p>
                                </div>
                            </div>

                            <div className='skin-carrousel'>
                                <div className='skin-carrousel-img'>
                                    <img src={selectedWeapon.displayIcon} alt={selectedWeapon.displayName} />

                                    {selectedWeapon.skins.map((skin, index) => (
                                        <div key={index}>
                                            {skin.displayIcon && (
                                                <img src={skin.displayIcon} alt={skin.displayName} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </section>

            <BackTop />
        </main>
    )
}

export default Weapons;