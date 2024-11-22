import { useState } from "react"

const Login = ({handlelogin})  => {

    const [email , setEmail] = useState('')
    const [passowrd , setPassword] = useState('')

    const Submithandler = (e) => {
        e.preventDefault()
        handlelogin(email , passowrd)
        setEmail('')
        setPassword('')
    }


    return(
        <div className=" h-screen w-screen flex items-center justify-center">
                <div className=''>
                    <form onSubmit={(e) => {
                        Submithandler(e)
                    }} className=" flex flex-col items-center justify-center p-20 rounded-xl border-2 border-emerald-100">
                        <h1 className="mb-8 font-bold text-3xl">Log In</h1>
                        <input
                        value={email}
                        onChange={(e) =>{
                            setEmail(e.target.value)
                        }}
                        required className= 'bg-transparent outline-none mb-5 text-xl border-2 py-3 px-5 border-emerald-600 rounded-full placeholder:text-gray-100 'type="email" name="email" placeholder="Enter your email" />
                        <input
                        value={passowrd}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required className=' bg-transparent outline-none text-xl border-2 py-3 px-5 border-emerald-600 rounded-full placeholder:text-gray-100' type="Passoword" placeholder="Enter your passowrd" />
                        <button className=" outline-none mt-6 text-xl py-2 px-3 border-none bg-emerald-600 rounded-full">Log In</button>
                    </form>
                </div>
        </div>
    )
}

export default Login;