import {useCollection} from 'react-firebase-hooks/firestore';
import {collection, query, orderBy} from 'firebase/firestore';
import {db} from '@/firebase';
import {Post} from "@/components/Post";

function Posts() {
    const postsRef = collection(db, 'posts');
    const q = query(postsRef, orderBy('timestamp', 'desc'));
    const [realtimePosts, loading, error] = useCollection(q);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!realtimePosts) {
        return <p>No posts available</p>;
    }

    const posts = realtimePosts.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return (
        <div>
            {posts.map((post, index) => (
                <Post
                    key={index}
                    name={post.name}
                    message={post.message}
                    email={post.email}
                    timestamp={post.timestamp}
                    image={post.image}
                    postImage={post.postsImage}
                />
            ))}
        </div>
    );
}

export default Posts;
