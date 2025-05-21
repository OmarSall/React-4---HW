import { useState } from "react";
import PostList from "./PostList";
import styles from "../styles/UserItem.module.css";

export default function UserItem({ user, posts, comments }) {
    const [showPosts, setShowPosts] = useState(false);

    return (
    <div className={styles.container}>
        <h2>
            {user.name}
        </h2>
        <p>({user.email}) - {posts.length} posts</p>
        <button onClick={() => setShowPosts(!showPosts)}>
            {showPosts ? "Hide Posts" : "Show Posts"}
        </button>
        {showPosts && <PostList posts={posts} comments={comments} />}
    </div>
    );
}