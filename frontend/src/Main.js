import useFirebaseAuth from "./auth/hooks";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Main = () => {
    useFirebaseAuth();
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Chalecos para rondineros</span>
                    <button className="btn btn-outline-danger" onClick={() => {
                        const auth = getAuth();
                        signOut(auth).catch((error) => {
                            console.log(error)
                        });
                    }}>Log out</button>
                </div>
            </nav>
            <div className="container p-5">
                <h1>Main page</h1>
            </div>
        </>
    );
}

export default Main;