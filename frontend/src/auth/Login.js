import { useState } from 'react';
import Input from '../utils/Input';
import ShowPassword from './ShowPassword';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <h1>Login</h1>
            <Input label="Email" placeholder="Email" value={email} setValue={setEmail} />
            <Input
                label="Password"
                placeholder="Password"
                value={password}
                setValue={setPassword}
                buttons={[
                    <ShowPassword showPassword={showPassword} setShowPassword={setShowPassword} />
                ]}
                type={showPassword ? "text" : "password"} />
            <button className="btn btn-primary">Login</button>
        </div>
    )
}

export default Login;