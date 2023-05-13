import Header from "@/components/Header";
import {getSession} from "next-auth/react";
import Login from "@/components/Login";

export default function Home({session}) {
    if (!session) return <Login/>
    return (
        <div>
            <Header/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    return {
        props: {
            session
        }
    }
}
