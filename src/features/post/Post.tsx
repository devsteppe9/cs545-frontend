import { useContext } from "react";
import PostModel from "../../models/PostModel";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { SelectedPostContext } from "../dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

interface PostProps extends PostModel {
    onDeletePost: (id: number) => void;
}

export default function Post({ id, title, author, content, onDeletePost }: PostProps) {
    const anothetSetSelectedPost = useContext(SelectedPostContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        if (anothetSetSelectedPost) {
            anothetSetSelectedPost({ id, title, author, content });
            navigate(`/posts/${id}`);
        }
    }

    return (
        <div onClick={onClickHandler} className="post">
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