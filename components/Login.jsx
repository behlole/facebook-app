import { signIn } from "next-auth/react";

export default function Login() {
    const signInWithFacebook = async () => {
        await signIn("facebook", { callbackUrl: "http://localhost:3000" });
    };

    const signInWithGitHub = async () => {
        await signIn("github", { callbackUrl: "http://localhost:3000" });
    };

    return (
        <div className="grid place-items-center">
            <h1
                onClick={signInWithFacebook}
                className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
            >
                Login with Facebook
            </h1>
            <h1
                onClick={signInWithGitHub}
                className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
            >
                Login with GitHub
            </h1>
        </div>
    );
}
