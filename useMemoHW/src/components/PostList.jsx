import PostItem from "./PostItem";
import styles from "../styles/PostList.module.css";

export default function PostList({ posts, comments }) {
    return (
        <div className={styles.postList}>
            {posts.map(post => (
                <PostItem
                    key={post.id}
                    post={post}
                    comments={comments.filter((comment) => comment.postId === post.id)}
                />
            ))}
        </div>
    );
}