import React, { useState } from "react";
import SignupForm from "./SignupForm";
import AccountSuccess from "./AccountSuccess";

const Form = () => {
    const [formIsSubmitted,setFormIsSubmitted] = useState(false);
    const submitForm = () =>{
        setFormIsSubmitted(true);
    };
    return <div>
        {!formIsSubmitted ? <SignupForm submitForm={submitForm}/> : <SignupFormSuccess/>}
    </div>;
};

export default Form;