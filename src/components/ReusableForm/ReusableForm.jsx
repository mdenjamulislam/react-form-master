import React from 'react';

const ReusableForm = ({ formTitle, handleSubmit, submitBnt = 'Submit' }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
        }
        handleSubmit(data);
    }
    
    return (
        <div className='mt-8'>
            <h2 className='text-3xl font-bold pb-5'>{formTitle}</h2>
            <form onSubmit={handleLocalSubmit} className="w-full md:w-1/2">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" name="name" placeholder="Type here" className="input input-bordered input-accent w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Your email address</span>
                    </div>
                    <input type="email" name="email" placeholder="Type here" className="input input-bordered input-accent w-full " />
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
                    <textarea type="text" name="comment" placeholder="Type here" className="input input-bordered input-accent w-full "></textarea>
                </label>
                <button className="btn btn-primary mt-3" type="submit">{submitBnt}</button>
            </form>
        </div>
    );
};

export default ReusableForm;