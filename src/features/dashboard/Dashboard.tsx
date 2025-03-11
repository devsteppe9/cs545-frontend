import { ChangeEvent, MouseEventHandler, useState } from "react";
import PostModel from "../../models/PostModel";
import Posts from "../post/Posts";

export default function Dashboard() {

    const initialPosts = [
        { id: 1, title: 'Post 1', author: 'Author 1' },
        { id: 2, title: 'Post 2', author: 'Author 2' },
        { id: 3, title: 'Post 3', author: 'Author 3' }
    ];


    const [posts, setPosts] = useState<PostModel[]>(initialPosts);
    const [newTitle, setNewTitle] = useState<string>('');

    function updateFirstPostTitle() {
        const updatedPosts = [...posts];
        updatedPosts[0].title = newTitle;
        setNewTitle('');
        setPosts(updatedPosts);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>

            <h1>Posts</h1>
            <Posts posts={posts} />
            <input placeholder="Update title" type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <button onClick={updateFirstPostTitle}>Update</button>

        </div>
    )
}