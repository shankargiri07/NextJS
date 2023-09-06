import Link from "next/link";

const About = () => {
    return(
        <div>
            <h1>About Page</h1>
            <Link href="/">Go To Home Page</Link>

            <br />

            <div>
                <Link href="/about/aboutcollege"> Go To About College Page</Link> || <Link href="/about/aboutstudent"> Go To About Student Page</Link>
            </div>
        </div>
    )
}
export default About;