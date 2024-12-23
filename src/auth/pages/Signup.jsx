// import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

const Signup = () => {

    const [form,setForm] = useState({name:"",email:"",password:"",role:"user",blocked:false});
    const {handleSignup} = useUser();
    
    const handleChange = (e) => {
        const {name , value} = e.target;
        setForm({...form,[name]:value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = await handleSignup(form);
        if (message) alert(message);
    };
    //     try {
    //         const {data} = await axios.get("http://localhost:5000/users", {
    //             params: {email:form.email}
    //         })
    //         if (data.length > 0) setMessage("User already exist")                
    //         else {
    //             await axios.post("http://localhost:5000/users",form);
    //             navigate("/", { state: { name: form.email } });
    //         }
    //     } catch (error) {
    //         setMessage("An error occurred")
    //     }
    // }


    return(
        <div className="flex justify-center h-screen w-screen items-center">
            <div className="flex flex-col items-center w-full sm:w-[350px] md:w-[400px] lg:w-[450px]  h-auto rounded-lg p-4 border shadow-lg">
                <h1 className="font-bold text-3xl mt-5 mb-5 font-serif ">SignUp</h1>
                {/* {message && <p className="mt-4 text-red-500">{message}</p>} */}
                <form className=" p-6 w-80" onSubmit={handleSubmit} >
                    <input 
                        type="text" 
                        placeholder="Enter name" 
                        className="font-serif mt-5 border py-2 w-[235px] outline-none  pl-2" 
                        value={form.name}
                        onChange={handleChange}
                        name="name"
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="font-serif mt-5 border py-2 w-[235px] outline-none  pl-2" 
                        value={form.email}
                        onChange={handleChange}
                        name="email"
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="font-serif mt-5 border py-2 w-[235px] outline-none  pl-2" 
                        value={form.password}
                        onChange={handleChange}
                        name="password"
                        required
                    />
                    <p className="mr-32 mt-5 text-sm text-gray-400 font-serif ">Forget Password?</p>
                    <button type="submit"
                        className="bg-gradient-to-tr  mt-5 py-2 text-white
                        px-16 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 ml-[50px]"
                    >
                        SignUp
                    </button>
                </form>
                <div className="flex font-serif text-sm text-gray-500">
                    <p className="mt-5 ">Have an Account ? </p>
                    <NavLink  to={"/login"}><h1 className="mt-5 text-blue-600">Login</h1></NavLink>
                </div>

            </div>
            
        </div>
    );
};

export default Signup;