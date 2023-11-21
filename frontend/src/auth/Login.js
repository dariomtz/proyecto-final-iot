import { useState } from 'react';
import Input from '../utils/Input';
import ShowPassword from './ShowPassword';
import { Link } from 'react-router-dom';
import useFirebaseAuth from './hooks';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useFirebaseAuth();

    const login = async () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).
            catch((error) => {
                console.log(error);
                alert(error.message);
            });
    }

    return (
        <div className="container p-5">
            <h1>Login</h1>
            <Input label="Email" placeholder="Email" value={email} setValue={setEmail} />
            <Input
                label="Password"
                placeholder="Password"
                value={password}
                setValue={setPassword}
                buttons={[
                    <ShowPassword key={1} showPassword={showPassword} setShowPassword={setShowPassword} />
                ]}
                type={showPassword ? "text" : "password"} />
            <button className="btn btn-primary" onClick={login}>Login</button>
            <p className="pt-3">Don't have an account? <Link to="/signup" className="btn btn-link">Sign up</Link></p>
        </div>
    )
}

export default Login;