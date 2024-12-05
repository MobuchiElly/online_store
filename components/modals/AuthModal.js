import Image from "next/image"
import { useState } from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import app from "@/utils/auth-config/firebase-config";
import axios from "axios";



const Auth = ({closeModal}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [toggleReg, setToggleReg] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const auth = getAuth(app);

    const handleLogin = async () => {
        try {
            if (!email && !password) {
                setError("Email and password are required");
                return;
            }
            setLoading(true);
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            const user = userCred.user;
            const authId = userCred.user.uid;
            if(user && authId){
                closeModal();
            }
        } catch(error){
            console.error(error);
        }
        setLoading(false);
    }

    const handleSignUp = async () => {
        try {
            if (!name || email || password) {
                setError("Please fill all fields");
            }
            const userCred = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const authId = userCred.user.uid; 
            if (userCred && id) {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/auth/register`, { name, email, authId });
                res.status === 201 ? closeModal : "";
            }
        } catch(error) {
            console.error(error);
            //auth missing password
        }
    }


    return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center'>
        <div className='bg-white relative space-y-4 py-12 px-6 rounded-lg min-w-80'>
            <span className="absolute right-4 top-4" onClick={closeModal}>
                <Image src="/assets/images/close-icon.svg" alt="close svg" height={25} width={25}/>
            </span>
            <h1 className="text-mainBg font-[650] text-lg border-b border-b-mainBg text-center">{toggleReg ? "LOGIN" : "REGISTER"}</h1>
            {!toggleReg ? <div>
                <label className="block pt-3">Full Name</label>
                <input className="w-full" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)}/>
            </div> : ""}
            <label className="block pt-3">Email address</label>
            <input className="w-full" placeholder="validemail@mail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label className="block pt-3">Password</label>
            <input className="w-full" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className="flex justify-between pt-3">
                <input type={"checkbox"}/>
                <span>Forgot Password?</span>
            </div>
            <div className="w-full">
                {
                    toggleReg ? 
                    (<button className="bg-mainBg hover:bg-layoutMainBg bg-opacity-95 font-[600] text-lg rounded-lg py-4 w-full" onClick={handleLogin}>
                    Login
                </button>) : 
                (<button className="bg-mainBg hover:bg-layoutMainBg bg-opacity-95 font-[600] text-lg rounded-lg py-4 w-full" onClick={handleSignUp}>
                    Register
                </button>)
                }
            </div>
            <div>
                {
                    toggleReg ? 
                    <div className="flex justify-between text-sm px-2"><span>Not a user?</span> <span className="cursor-pointer" onClick={() => setToggleReg(!toggleReg)}>Signup</span></div> : 
                    <div className="flex justify-between text-sm px-2"><span>Already have an account?</span> <span className="cursor-pointer" onClick={() => setToggleReg(!toggleReg)}>Login</span></div>
                }
                <div className="h-2">
                    {!error && <p className="text-center text-[13px] font-[500] text-red-600">{error}</p>}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Auth