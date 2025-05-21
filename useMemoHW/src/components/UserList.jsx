import UserItem from "./UserItem";

export default function UserList({ users, posts, comments }) {
    return (
        <div>
            {users.map(user => (
                <UserItem
                    key={user.id}
                    user={user}
                    posts={posts.filter((post) => post.userId === user.id)}
                    comments={comments}
                />
            ))}
        </div>
    );
}