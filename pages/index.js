import Header from "@/components/Header";
import {getSession, signIn} from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";

export default function Home({session}) {
    if (!session) {
        signIn()
    }
    return (
        <div>
            <Header/>
            <main className={"flex"}>
                <Sidebar/>
                <Feed/>
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
