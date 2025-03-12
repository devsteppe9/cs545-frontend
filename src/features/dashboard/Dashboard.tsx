import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Posts from '../post/Posts';
import AddPost from '../postDetails/AddPost';
import PostDetails from '../postDetails/PostDetails';
import { createContext, useEffect, useState } from "react";
import PostModel from "../../models/PostModel";
import { deleteRequest, get } from "../../services/fetchService";

export const SelectedPostContext = createContext<React.Dispatch<React.SetStateAction<PostModel | null>> | null>(null);

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
        <Router>
            <SelectedPostContext.Provider value={setSelectedPost}>
                <Header />
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome to the dashboard</p>
                    <input placeholder="Update first post title" type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    <button onClick={updateFirstPostTitle}>Update</button>
                    <Routes>
                        <Route path="/posts" element={<Posts posts={posts} onDeletePost={onDeletePost} />} />
                        <Route path="/new-post" element={<AddPost setFlag={setFlag} />} />
                        <Route path="/posts/:id" element={selectedPost && <PostDetails
                            id={selectedPost.id}
                            title={selectedPost.title}
                            author={selectedPost.author}
                            content={selectedPost.content}
                            setFlag={setFlag}
                        />} />
                    </Routes>
                </div>
            </SelectedPostContext.Provider>
        </Router>
    )
}