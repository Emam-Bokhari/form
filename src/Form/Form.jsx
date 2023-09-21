// import { useState } from "react"

// const Form = () => {

//   const [email,setEmail]=useState(null)
//   const [name,setName]=useState(null)
//   const [password,setPassword]=useState(null)

//   const handleSubmit=(event)=>{
//     event.preventDefault()
//     console.log(name,email,password)
//   }

//   const handleChangeName=(event)=>{
//     setName(event.target.value)
//   }

//   const handleChangeEmail=(event)=>{
//     setEmail(event.target.value)
//   }

//   const handleChangePassword=(event)=>{
//     setPassword(event.target.value)
//   }


//   return (
//     <div className="flex justify-center items-center h-screen">
      
//       <div className="w-72 h-[400px] border-2 border-indigo-300 px-6 absolute">
//       <div className="relative top-14">
//       <h2 className="text-center text-3xl text-indigo-700 font-semibold">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-5 mt-5 ">
//         <input onChange={handleChangeName} className="border-b-2 w-full border-black p-1 outline-none" type="text" name="name" placeholder="Enter Your Name" required/>
//         <input onChange={handleChangeEmail} className="border-b-2 border-black w-full p-1 outline-none" type="email" name="email" placeholder="Enter Your E-mail" required/>
//         <input onChange={handleChangePassword} className="border-b-2 border-black w-full p-1 outline-none" type="password" name="password" placeholder="Enter Your Password" required/>
//         <div className="text-center">
//         <input className="bg-indigo-300 hover:bg-indigo-400 px-3 py-1 rounded-sm w-full cursor-pointer font-medium hover:text-white" type="submit" value="Submit"  />
//         </div>
//       </form>
//       </div>
//       </div>
      
//     </div>
//   )
// }
// export default Form