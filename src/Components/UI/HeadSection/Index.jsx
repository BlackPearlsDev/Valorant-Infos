import valorantLogo from '../../../assets/img/valorant-logo.png';

function HeaderSection(props) {

    return (
        <section className="head-section">
            <article>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.para}</p>
                    <a href={props.anchor} className='btn'>{props.btn}</a>
                </div>

                <div>
                    <img src={valorantLogo} alt="Valorant Infos" />
                </div>
            </article>

            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                </defs>
                <g className="wave1">
                    <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"></use>
                </g>
                <g className="wave2">
                    <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"></use>
                </g>
                <g className="wave3">
                    <use href="#wave-path" x="50" y="9" fill="#ffeef2"></use>
                </g>
            </svg>
        </section>
    )
}

export default HeaderSection;