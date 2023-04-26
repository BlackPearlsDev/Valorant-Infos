import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    
    const [headerScrolled, setHeaderScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderScrolled(true);
            } else {
                setHeaderScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    return (
        <header className={headerScrolled ? 'fixed-top header-scrolled' : 'fixed-top'}>
            <div className='header-content'>
                <a href="/"><h1>vAlorant Infos</h1></a>
                <nav>
                    <Link to="agents" className='nav-link nav-link-ltr'>Agents</Link>
                    <Link to="maps" className='nav-link nav-link-ltr'>Maps</Link>
                    <Link to="weapons" className='nav-link nav-link-ltr'>Armes</Link>
                    <Link to="" className='nav-link nav-link-ltr'>Modes</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;