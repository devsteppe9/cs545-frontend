import { useState } from "react";
import { postRequest, updateRequest } from "../../services/fetchService";


export default function AddPost({ setFlag }: { setFlag: (value: React.SetStateAction<boolean>) => void }) {

    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postAuthor, setPostAuthor] = useState('');

    const handleSave = async () => {
        const postData = { title: postTitle, content: postContent, author: postAuthor };
        try {
            await postRequest(`users/1/posts`, postData);
            console.log('Post saved successfully:');
            setFlag((prev) => !prev);
        } catch (error) {
            console.error('Error saving post:', error);
        }
    };

    return (
        <div>
            <h1>Create new post</h1>
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
                <button type="submit">Create new</button>
            </form>
        </div>
    );
}