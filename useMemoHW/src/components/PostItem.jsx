import { useState } from "react";
import CommentList from "./CommentList";
import styles from "../styles/PostItem.module.css";

export default function PostItem({ post, comments }) {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className={styles.postItem}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => setShowComments(!showComments)}>
                {showComments ? "Hide comments" : "Show comments"}
            </button>
            {showComments && <CommentList comments={comments} />}
        </div>
    )
}