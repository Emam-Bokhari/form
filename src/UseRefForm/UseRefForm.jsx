import { useEffect } from "react";
import { useRef } from "react";

const UseRefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    
    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="border-2 border-indigo-500 p-4">
                <input ref={nameRef} className="border-2 border-black" type="text" name="name" placeholder="Enter Your Name" />
                <br />
                <br />
                <input ref={emailRef} className="border-2 border-black" type="email" name="email" placeholder="Enter Your E-mail" />
                <br />
                <br />
                <input ref={passwordRef} className="border-2 border-black" type="password" name="password" placeholder="Enter Your Password" />
                <br />
                <br />
                <input className="bg-indigo-300 rounded-md px-3 py-1 text-xl" type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default UseRefForm;