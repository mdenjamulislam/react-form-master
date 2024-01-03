import React, { useEffect, useRef } from 'react';

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const numberRef = useRef(null);
    const commentsRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
    }

    useEffect(() => {
        nameRef.current.focus();
    },[])
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full md:w-1/2">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input ref={nameRef} type="text" name="name" placeholder="Type here" className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your email address</span>
                    </div>
                    <input type="email" name="email" placeholder="Type here" defaultValue={"example@gmail.com"} className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your phone numer</span>
                    </div>
                    <input type="number" name="phone" placeholder="Type here" className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your comments</span>
                    </div>
                    <textarea type="text" name="email" placeholder="Type here" className="input input-bordered input-accent w-full "></textarea>
                </label>
                <button className="btn btn-primary mt-3" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RefForm;