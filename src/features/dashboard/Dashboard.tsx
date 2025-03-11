import { useEffect, useState } from "react";
import PostModel from "../../models/PostModel";
import Posts from "../post/Posts";
import { deleteRequest, get } from "../../services/fetchService";
import PostDetails from "../postDetails/PostDetails";
import AddPost from "../postDetails/AddPost";

export default function Dashboard() {

    const initialPosts = [
        { id: 1, title: 'Post 1', author: 'Author 1', content: 'Content 1' },
    ];


    const [posts, setPosts] = useState<PostModel[]>(initialPosts);
    const [newTitle, setNewTitle] = useState<string>('');
    const [selectedPost, setSelectedPost] = useState<PostModel | null>(null);
    const [flag, setFlag] = useState(true);

    const fetchPosts = async () => {
        const response = await get('posts');
        console.log(response);
        setPosts(response);
    }

    function updateFirstPostTitle() {
        const updatedPosts = [...posts];
        updatedPosts[0].title = newTitle;
        setNewTitle('');
        setPosts(updatedPosts);
    }

    const onDeletePost = async (id: number) => {
        const response = await deleteRequest(`posts/${id}`);
        console.log(response);
        setFlag(!flag);
    }

    useEffect(() => {
        fetchPosts();
    }, [flag]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>

            <h1>Posts</h1>
            <Posts posts={posts} setSelectedPost={setSelectedPost} onDeletePost={onDeletePost} />
            <input placeholder="Update title" type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <button onClick={updateFirstPostTitle}>Update</button>

            {selectedPost && <PostDetails
                id={selectedPost.id}
                title={selectedPost.title}
                author={selectedPost.author}
                content={selectedPost.content}
                setFlag={setFlag}
            />}

            <AddPost setFlag={setFlag} />

        </div>
    )
}