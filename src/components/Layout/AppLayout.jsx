    import { useLayoutEffect, useState } from "react";
    import { useLocation } from "react-router-dom";
    import { Navbar } from "../ui/Navbar";
    import { Footer } from "../ui/Footer";
    import { Outlet } from "react-router-dom";
    import ScrollToTop from "../ui/ScrollToTop";
    import { Loading } from "../Layout/Loading";

    export const AppLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timeout);
    }, [location.pathname]);

    if (loading) return <Loading />;

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
    );
    };
