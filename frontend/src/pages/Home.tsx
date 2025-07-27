import Navbar from '.././components/NavBar';
import Hero from '.././components/Hero';
import About from '.././components/About';
import Contact from '.././components/Contact';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const target = document.querySelector(location.hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                }, 0);
            }
        }
    }, [location]);

    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Contact />
        </main>
    );
};
