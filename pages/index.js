import Header from "@/components/Header";
import {getSession, signIn} from "next-auth/react";

export default function Home({session}) {
    if (!session) {
        signIn()
    }
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
