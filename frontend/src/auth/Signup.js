import { useState } from 'react';
import Input from '../utils/Input';
import ShowPassword from './ShowPassword';
import { Link } from 'react-router-dom';
import useFirebaseAuth from './hooks';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useFirebaseAuth()

    const createUser = async () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            updateProfile(auth.currentUser, {
                displayName: firstName + " " + lastName
            });
            // Create a document in your users collection and store the user's name
            // and email address
            const db = getFirestore();
            db.collection("users").doc(user.user.uid).set({
                name: firstName + " " + lastName,
                email: email
            }).then(() => {
                alert("User created successfully");
            }).catch((error) => {
                console.log(error);
                alert(error.message);
            });
        }).catch((error) => {
            console.log(error);
            alert(error.message);
        });
    }

    return (
        <div className="container p-5">
            <h1>Sign up</h1>
            <Input label="First Name" placeholder="First Name" value={firstName} setValue={setFirstName} />
            <Input label="Last Name" placeholder="Last Name" value={lastName} setValue={setLastName} />
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

            <Input
                label="Confirm Password"
                placeholder="Password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                buttons={[
                    <ShowPassword key={1} showPassword={showConfirmPassword} setShowPassword={setShowConfirmPassword} />
                ]}
                type={showConfirmPassword ? "text" : "password"} />
            <button className="btn btn-primary" onClick={createUser} >Sign up</button>
            <p className="pt-3">Already have an account? <Link to="/signup" className="btn btn-link">Log into your account</Link></p>
        </div>);
}

export default Signup;