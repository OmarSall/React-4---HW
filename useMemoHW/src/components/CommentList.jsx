export default function CommentList({ comments }) {
    return (
        <ul>
            {comments.map((comment) => (
                <li key={comment.id}>
                    <p><strong>{comment.name}</strong> {comment.email}</p>
                    <p>{comment.body}</p>
                </li>
                ))}
        </ul>
    );
}