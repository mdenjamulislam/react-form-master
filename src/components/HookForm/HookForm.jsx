import { useState } from "react";
import useInputState from "../../hooks/useinputestate";

const HookForm = () => {
    const [name, handleNameChange] = useInputState('Enjam');
    const [email, handleEmailChange] = useInputState();
    const [number, handleNumberChange] = useInputState();
    const [comment, handleCommentChange] = useInputState('Type your comments here....');


    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form Data", name, email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full md:w-1/2">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Type here" className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your email address</span>
                    </div>
                    <input value={email} onChange={handleEmailChange} type="email" name="email" placeholder="Type here" className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your phone numer</span>
                    </div>
                    <input value={number} onChange={handleNameChange} type="text" name="phone" placeholder="Type here" className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your comments</span>
                    </div>
                    <textarea value={comment} onChange={handleCommentChange} type="text" name="email" placeholder="Type here" className="input input-bordered input-accent w-full "></textarea>
                </label>
                <button className="btn btn-primary mt-3" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;