import { useState, useEffect } from 'react';
import HeadSection from '../../UI/HeadSection/Index';
import BackTop from '../../UI/BackTop/Index';
import api from '../../../API/index';

function Agents() {

    const [agents, setAgents] = useState([]);
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [selectedSpell, setSelectedSpell] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        api.get('/agents', {
                params: {
                    language: 'fr-FR'
                }
            })
            .then(res => {
                setAgents(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleShowDetails = (e, agent) => {
        e.preventDefault();
        setSelectedAgent(agent);
        setSelectedSpell(null);
        setIsSelected(!isSelected);
    }

    const handleShowSpell = (e, spell) => {
        e.preventDefault();
        setSelectedSpell(spell);
    }

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <>
            <HeadSection title="Les Agents" para="Les agents sont la pierre angulaire de Valorant, découvrez leurs particularités." btn="Parcourir" anchor="#agents-details"/>

            <main>
                <section className='agents-details' id="agents-details">
                    <article>
                        <h2>AGENTS</h2>
                        <div className='div-line'></div>
                        <p>Chaque agent dispose de sorts et compétences spécifiques.</p>
                    </article>

                    {widthScreen > 1400 ? (
                    <div className='agents-pos'>
                    {Array.isArray(agents) && agents.length > 0 ? agents.filter(agent => agent.isPlayableCharacter === true).sort((a, b) => a.displayName.localeCompare(b.displayName)).map((agent, index) => (
                            <div className='agent-card' key={index} id={agent.displayName}>
                                <div className='agent-img'>
                                    <img src={agent.fullPortrait} alt={agent.displayName} className={selectedAgent === agent ? 'hide-infos' : 'VIDE'}/>
                                </div>
                                <button className='agent-btn' onClick={(e) => handleShowDetails(e, agent)}>
                                    <h3>{agent.displayName}</h3>
                                </button>
                                {selectedAgent === agent && 
                                    <div className='agent-details'>
                                        <div>
                                            <img src={agent.background} alt='' className='agent-bg'/>
                                        </div>
                                        <div className='agents-box-details'>
                                            <div className='name-role'>
                                                <h2>{agent.displayName}</h2>
                                                <p>'{agent.role.displayName}'</p>
                                            </div>
                                            <p>{agent.description}</p>

                                            <div className='agent-abilities'>
                                                {selectedAgent.abilities.map((ability, index) => (
                                                    <div className='agent-ability' key={index}>
                                                        <div className='ability-img'>
                                                            <button onClick={(e) => handleShowSpell(e, ability)}>
                                                                <img src={ability.displayIcon} alt={ability.displayName}/>
                                                            </button>
                                                        </div>
                                                        <div className={`ability-details ${selectedSpell === ability ? '' : 'hide-infos'}`}>
                                                            <h3>{ability.displayName}</h3>
                                                            <p>{ability.description}</p>
                                                            <p>Emplacement: {ability.slot}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className='voice-line'>
                                                <audio controls src={agent.voiceLine.mediaList[0].wave}></audio>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        )) : 
                            <>
                                <p>Chargement des données ...</p>
                            </>
                        }
                    </div>
                    ) : (
                        <p className='txt-error'>Le responsive n'étant pas encore fait, tu ne peux pas voir les agents.</p>
                    )}
                </section>
            </main>

            <BackTop />
        </>
    )
}

export default Agents;