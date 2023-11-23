import useFirebaseAuth from "./auth/hooks";
import { getAuth, signOut } from "firebase/auth";
import Devices from "./ubidots/Devices";
import Dashboards from "./dashboards/Dashboards";

const Main = () => {
    useFirebaseAuth();

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Chalecos LoRa</span>
                    <button className="btn btn-outline-danger" onClick={() => {
                        const auth = getAuth();
                        signOut(auth).catch((error) => {
                            console.log(error)
                        });
                    }}>Log out</button>
                </div>
            </nav>
            <div className="container p-5">
                <Dashboards />
                <Devices />
            </div>
        </>
    );
}

export default Main;