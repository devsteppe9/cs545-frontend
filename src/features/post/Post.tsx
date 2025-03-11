import PostModel from "../../models/PostModel";
import { FaEdit, FaTrash } from 'react-icons/fa';

interface PostProps extends PostModel {
    setSelectedPost: (post: PostModel) => void;
    onDeletePost: (id: number) => void;
}

export default function Post({ id, title, author, content, setSelectedPost, onDeletePost }: PostProps) {
    return (
        <div onClick={() => setSelectedPost({ id, title, author, content })} className="post">
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            <div className="post-actions">
                <button className="edit-button">
                    <FaEdit /> Edit
                </button>
                <button onClick={() => onDeletePost(id)} className="delete-button">
                    <FaTrash /> Delete
                </button>
            </div>
        </div>
    )
}