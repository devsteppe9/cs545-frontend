import { useContext } from "react";
import PostModel from "../../models/PostModel";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { SelectedPostContext } from "../dashboard/Dashboard";

interface PostProps extends PostModel {
    onDeletePost: (id: number) => void;
}

export default function Post({ id, title, author, content, onDeletePost }: PostProps) {
    const anothetSetSelectedPost = useContext(SelectedPostContext);
    return (
        // <div onClick={() => setSelectedPost({ id, title, author, content })} className="post">
        <div onClick={() => anothetSetSelectedPost && anothetSetSelectedPost({ id, title, author, content })} className="post">
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