import { useRef } from "react";
import { postRequest } from "../../services/fetchService";
import { useNavigate } from 'react-router-dom';

export default function AddPost({ setFlag }: { setFlag: (value: React.SetStateAction<boolean>) => void }) {

    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const handleSave = async () => {
        const postData = { title: '', content: '', author: '' };
        if (formRef.current) {
            const form = formRef.current;
            postData['title'] = (form.elements.namedItem('title') as HTMLInputElement).value;
            postData['content'] = (form.elements.namedItem('content') as HTMLTextAreaElement).value;
            postData['author'] = (form.elements.namedItem('author') as HTMLInputElement).value;
        }

        try {
            await postRequest(`users/1/posts`, postData);
            console.log('Post saved successfully:');
            setFlag((prev) => !prev);
            // go to /posts link
            // window.location.href = '/posts';
            navigate('/posts');

        } catch (error) {
            console.error('Error saving post:', error);
        }
    };

    return (
        <div>
            <h1>Create new post</h1>
            <hr />
            <form ref={formRef} onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <div>
                    <label>Post title:</label>
                    <input placeholder="Title"
                        type="text"
                        name="title"
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea placeholder="Content"
                        name="content"
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input placeholder="Author"
                        type="text"
                        name="author"
                    />
                </div>
                <button type="submit">Create new</button>
            </form>
        </div>
    );
}
