    import { useState, useEffect } from "react";
    import { FaArrowUp } from "react-icons/fa";
    import "./ScrollToTop.css";

    const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    // Show button when scrolled down 300px
    useEffect(() => {
        const handleScroll = () => {
        setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return (
        <button
        className={`scroll-to-top ${visible ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        >
        <FaArrowUp />
        </button>
    );
    };

    export default ScrollToTop;
