import PostModel from "../../models/PostModel";

export default function Post(post: PostModel) {
    return (
        <div>
            <p>ID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Author: {post.author}</p>
        </div>
    )
}