    import { useRouteError } from "react-router-dom";
    import { useNavigate } from "react-router-dom";
    import "./ErrorPage.css";
    import errorImg from "../assets/404Error.jpg";  

    export const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoBack = () => navigate(-1);

    if (error?.status === 404) {
        return (
        <div className="error-container">
            <div className="error-card">

            <img src={errorImg} alt="404" className="error-image" />

            <h1 className="error-title">404</h1>
            <p className="error-text">The page you were looking for could not be found.</p>

            <button className="error-btn" onClick={handleGoBack}>
                Go Back
            </button>

            <p className="loading-text">Please Write Correct Path...</p>
            </div>
        </div>
        );
    }

    return <h2 className="fallback-text">The page you are looking for does not exist.</h2>;
    };
