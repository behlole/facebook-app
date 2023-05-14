import {useCollection} from 'react-firebase-hooks/firestore';
import {collection, query, orderBy} from 'firebase/firestore';
import {db} from '@/firebase';
import {Post} from "@/components/Post";

function Posts({posts}) {
    /**
     * Code to get posts using query
     */
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('timestamp', 'desc'));
    const [realtimePostsSnapshot, loading, error] = useCollection(q);
    let realtimePosts = null;
    if (realtimePostsSnapshot) {
        realtimePosts = realtimePostsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    }
    return (
        <div>{
            realtimePosts ?
                realtimePosts.map((post, index) => (
                    <Post
                        key={index}
                        name={post.name}
                        message={post.message}
                        email={post.email}
                        timestamp={post.timestamp}
                        image={post.image}
                        postImage={post.postsImage}
                    />
                ))
                :
                (
                    posts.map((post, index) => (
                        <Post
                            key={index}
                            name={post.name}
                            message={post.message}
                            email={post.email}
                            timestamp={post.timestamp}
                            image={post.image}
                            postImage={post.postsImage}
                        />
                    ))
                )
        }
        </div>
    );
}

export default Posts;
