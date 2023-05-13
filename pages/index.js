import Header from "@/components/Header";
import {getSession, signIn} from "next-auth/react";
import Sidebar from "@/components/Sidebar";

export default function Home({session}) {
    if (!session) {
        signIn()
    }
    return (
        <div>
            <Header/>
            <main className={"flex"}>
                <Sidebar/>
            </main>
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
