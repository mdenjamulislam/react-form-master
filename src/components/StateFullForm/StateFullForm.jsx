import { useState } from "react";

const StateFullForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    const [name, setName] = useState('Enjamul');
    const [error, setError] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6) {
            setError('Password must be 6 characters');
        } else {
            setError('');
        }
        console.log("Form Submited");
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(password);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleOnSubmit} className="w-full md:w-1/2">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input onChange={handleNameChange} type="text" name="name" placeholder="Type here" value={name} className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your email address</span>
                    </div>
                    <input onChange={handleEmailChange} type="email" name="email" placeholder="Type here" className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your phone numer</span>
                    </div>
                    <input type="number" name="phone" placeholder="Type here" className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Password</span>
                    </div>
                    <input onChange={handlePasswordChange} type="password" name="password" placeholder="Password" required className="input input-bordered input-accent w-full "/>
                    <div className="label label-text text-red-500">
                        {
                            error && <span>{error}</span>
                        }
                    </div>
                </label>
                <button className="btn btn-primary mt-3"  type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StateFullForm;