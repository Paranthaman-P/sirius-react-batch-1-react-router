import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        // return <Navigate to="/" replace />;
        return <h1 style={{"color": "red"}}>Unauthorised Access!</h1>
    }
    return children;
};
export default Protected;