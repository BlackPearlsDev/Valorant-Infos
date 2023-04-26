import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function BackTop() {

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const handleScrollClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showScrollButton && (
                <a href='/#' className="back-to-top" onClick={handleScrollClick} style={{display: 'inline'}}>
                    <FontAwesomeIcon icon={faAngleUp} size="sm" />
                </a>
            )}
        </>
    )
}

export default BackTop;