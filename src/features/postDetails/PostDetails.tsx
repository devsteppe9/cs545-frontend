import { useEffect, useState } from "react";
import PostModel from "../../models/PostModel";
import { updateRequest } from "../../services/fetchService";
import { useNavigate } from "react-router-dom";

interface PostDetailsProps extends PostModel {
    setFlag: (value: React.SetStateAction<boolean>) => void
}

export default function PostDetails({ id, title, content, author, setFlag }: PostDetailsProps) {

    const [postTitle, setPostTitle] = useState(title);
    const [postContent, setPostContent] = useState(content);
    const [postAuthor, setPostAuthor] = useState(author);
    const navigate = useNavigate();

    useEffect(() => {
        setPostTitle(title);
        setPostContent(content);
        setPostAuthor(author);
    }, [title, content, author]);

    const handleSave = async () => {
        const updateData = { id: id, title: postTitle, content: postContent, author: postAuthor };
        try {
            await updateRequest(`posts/${id}`, updateData);
            console.log('Post saved successfully:');
            setFlag((prev) => !prev);
            // go to /posts link
            navigate('/posts');
        } catch (error) {
            console.error('Error saving post:', error);
        }
    };

    return (
        <div>
            <h1>Post Details</h1>
            <hr />
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div>
                    <label>Post title:</label>
                    <input placeholder="Title"
                        type="text"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea placeholder="Content"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input placeholder="Author"
                        type="text"
                        value={postAuthor}
                        onChange={(e) => setPostAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}