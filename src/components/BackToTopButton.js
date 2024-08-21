
import React, { useState, useEffect } from 'react';

function BackToTopButton() {
    const [show, setShow] = useState(false);

    const checkScrollTop = () => {
        if (!show && window.pageYOffset > 300) {
            setShow(true);
        } else if (show && window.pageYOffset <= 300) {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [show]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        show && (
            <button
                className="back-to-top"
                onClick={scrollToTop}
            >
                Back to Top
            </button>
        )
    );
}

export default BackToTopButton;
