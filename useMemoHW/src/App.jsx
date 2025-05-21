import {useCallback, useEffect, useState, useMemo} from "react"
import "./App.css"
import UserList from "./components/UserList"


function App() {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([]);
    const [search, setSearch] = useState("");

    const fetchAllData = useCallback(async () => {
        try {
            const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/users"),
                fetch("https://jsonplaceholder.typicode.com/posts"),
                fetch("https://jsonplaceholder.typicode.com/comments"),
            ]);

            const [users, posts, comments] = await Promise.all([
                usersResponse.json(),
                postsResponse.json(),
                commentsResponse.json(),
            ]);

            setUsers(users);
            setPosts(posts);
            setComments(comments);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [])

    useEffect(() => {
        (async () => {
            await fetchAllData();
        })();
    }, [fetchAllData]);

    const filteredUsers = useMemo(() => {
        return users.filter((user) =>
            (user.name + user.email).toLowerCase().includes(search.toLowerCase()));
    },[search, users]);

    return (
        <div>
            <h1>Users and Posts</h1>
            <input type="text"
                   placeholder="Search by name or email"
                   value={search}
                   onChange={(event) => setSearch(event.target.value)}
            />
            <UserList users={filteredUsers}
                      posts={posts}
                      comments={comments}
            />
        </div>
    )
}

export default App
