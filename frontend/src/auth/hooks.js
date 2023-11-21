import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function useFirebaseAuth() {
    const auth = getAuth();
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/");
            } else if (navigate.location.pathname !== "/login" && navigate.location.pathname !== "/signup") {
                navigate("/login");
            }
        });
    }, [auth, navigate]);
}

export default useFirebaseAuth;