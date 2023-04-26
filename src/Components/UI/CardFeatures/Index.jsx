import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardFeature(props) {
    return (
        <article className='card-features'>
            {/* <svg>

            </svg> */}
            <div className='icon'>
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d={props.path}></path>
                </svg>
                <FontAwesomeIcon icon={props.icon} color={props.color}/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.para}</p>
        </article>
    )
}

export default CardFeature;