import React, { useEffect, useState } from "react";
import "../styles/footer.scss";

function Footer({ checkHome }) {
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const h = document.documentElement;
        const b = document.body;
        const st = 'scrollTop';
        const sh = 'scrollHeight';
        const scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        setScrollProgress(scroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="footer">
            <div className="progress" style={{ width: `${scrollProgress}%` }}>

            </div>
        </div>
    );
}

export default Footer;
