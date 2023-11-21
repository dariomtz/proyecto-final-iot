import useFirebaseAuth from "./auth/hooks";

const Main = () => {
    useFirebaseAuth();
    return (
        <div>
            <h1>Main page</h1>
        </div>
    );
}

export default Main;