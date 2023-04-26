import { useState, useEffect } from 'react';

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
                    <a href="/" className='nav-link nav-link-ltr'>Agents</a>
                    <a href="/" className='nav-link nav-link-ltr'>Maps</a>
                    <a href="/" className='nav-link nav-link-ltr'>Armes</a>
                    <a href="/" className='nav-link nav-link-ltr'>Modes</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;