import React, { useState } from "react";

const Login = ({handleLogin}) => {

    //UseState is like like react variable
   

 const [email, setEmail] = useState('')
 const [password, setpassword] = useState('')

 // Two way Binding
 const submitHandler =(e)=>{
e.preventDefault()
handleLogin(email,password)
 console.log("Email is",email);
 console.log("Password is",password);

 setEmail("")
 setpassword("")
 }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
         <form onSubmit={(e)=>{
           submitHandler(e)
         }} className='flex flex-col item-center justify-center'>
          
            <input value={email} onChange={(e)=>{
                setEmail(e.target.value);
                
            }} required className=" outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-grey-400" type="email" placeholder="Enter your email"/>
            <input value={password} onChange={(e)=>{
                setpassword(e.target.value);
            }} required className=" outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3  placeholder:text-grey-400" type="password" placeholder="Enter Password"/>
            <button className=" text-white border-none outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full mt-5  placeholder:text-white">Log in</button>
         </form>
      </div>
    </div>
  );
};

export default Login;
