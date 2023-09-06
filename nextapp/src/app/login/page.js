"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {

    const router = useRouter();

    const navigater = (name) => {
        router.push(name)
    }
    return(
        <div>
            <h1 className="header">Login Page</h1>
            <Link href="/">Go To Home Page</Link>

            <br/>

            <div>
                <button onClick={() => navigater("/login/loginstudent")}>Student Login</button> || <button onClick={() => navigater("/login/loginteacher")}>Teacher Login</button> 
            </div>
        </div>
    )
}

export default Login;