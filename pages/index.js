import Header from "@/components/Header";
import {getSession, signIn} from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import {Widgets} from "@/components/Widgets";
import {collection, orderBy, query, getDocs} from "firebase/firestore";
import {db} from "@/firebase";

export default function Home({session, posts}) {
    if (!session) {
        signIn()
    }
    return (
        <div>
            <Header/>
            <main className={"flex"}>
                <Sidebar/>
                <Feed posts={posts}/>
                <Widgets/>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const posts = [];
    querySnapshot.forEach((doc) => {
        posts.push({id: doc.id, ...doc.data()});
    });
    const docs = posts.map((post) => ({
        id: post.id,
        ...post,
        timestamp: null
    }))

    const session = await getSession(context)
    return {
        props: {
            session,
            posts: docs
        }
    }
}
