import { useState } from 'react';
import Input from '../utils/Input';
import ShowPassword from './ShowPassword';
import { Link } from 'react-router-dom';
import useFirebaseAuth from './hooks';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useFirebaseAuth()

    return (
        <div>
            <h1>Sign up</h1>
            <Input label="First Name" placeholder="First Name" value={firstName} setValue={setFirstName} />
            <Input label="Last Name" placeholder="Last Name" value={lastName} setValue={setLastName} />
            <Input label="Username" placeholder="Username" value={username} setValue={setUsername} />
            <Input
                label="Password"
                placeholder="Password"
                value={password}
                setValue={setPassword}
                buttons={[
                    <ShowPassword key={1} showPassword={showPassword} setShowPassword={setShowPassword} />
                ]}
                type={showPassword ? "text" : "password"} />

            <Input
                label="Confirm Password"
                placeholder="Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                buttons={[
                    <ShowPassword key={1} showPassword={showConfirmPassword} setShowPassword={setShowConfirmPassword} />
                ]}
                type={showConfirmPassword ? "text" : "password"} />
            <button className="btn btn-primary">Sign up</button>
            <p className="pt-3">Already have an account? <Link to="/signup" className="btn btn-link">Log into your account</Link></p>
        </div>);
}

export default Signup;