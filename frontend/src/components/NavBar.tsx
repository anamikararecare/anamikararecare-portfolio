import { navLinks, leftIcons } from "../../constants/index";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NavBar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#ffffff50',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
        });
    })
    return (
        <nav>
            <div>
                {/* Left group - the icons  */}
                <div className="flex items-center gap-4">
                    <ul className="flex items-center">
                        {leftIcons.map((icon) => (
                            <li key={icon.id}>
                                <img src={icon.src} alt={icon.alt} className="navbar-icon" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right group - the nav links */}
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>


    )
}

export default NavBar;