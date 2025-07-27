import { navLinks } from "../../constants/index";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NavBar = () => {

    const navigate = useNavigate();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleSectionClick = (id: string) => {
        navigate(`/#${id}`);
    };

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#ffffff50',
            backgroundFilter: 'blur(100px)',
            duration: 1,
            ease: 'power1.inOut',
        });
    })
    return (
        <nav>
            <div className="flex md:items-center justify-between px-15">
                <div className="">
                    <ul className="">
                        <Link to='/' className='w-7'>
                            <img src='./icons/logo.png' />
                        </Link>
                    </ul>
                </div>

                {/* Desktop nav links - hidden on mobile */}
                <ul className="hidden md:flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                        <li key={link.id} className="text-sm">
                            {link.type === 'route' ? (
                                <Link to={`/${link.id}`}>{link.title}</Link>
                            ) : (
                                <button onClick={() => handleSectionClick(link.id)} className="text-sm">
                                    {link.title}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Hamburger menu button - visible on mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile menu - collapsible */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col space-y-4 pt-4 pb-2">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            {link.type === 'route' ? (
                                <Link
                                    to={`/${link.id}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 hover:text-gray-600 transition-colors"
                                >
                                    {link.title}
                                </Link>
                            ) : (
                                <button
                                    onClick={() => {
                                        handleSectionClick(link.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block py-2 text-left hover:text-gray-600 transition-colors"
                                >
                                    {link.title}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;