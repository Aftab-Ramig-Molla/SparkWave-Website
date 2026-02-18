    import logo from "../../assets/CompanyLogo/logo.png";
    import "./Loading.css";

    export const Loading = () => {
        return (
            <div className="loadingContainer">
            <img src={logo} alt="Loading..." className="loadingLogo" />
            <p>Please wait...</p>
            </div>
        );
    };